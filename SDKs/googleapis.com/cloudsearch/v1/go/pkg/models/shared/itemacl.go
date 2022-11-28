package shared

type ItemACLACLInheritanceTypeEnum string

const (
	ItemACLACLInheritanceTypeEnumNotApplicable  ItemACLACLInheritanceTypeEnum = "NOT_APPLICABLE"
	ItemACLACLInheritanceTypeEnumChildOverride  ItemACLACLInheritanceTypeEnum = "CHILD_OVERRIDE"
	ItemACLACLInheritanceTypeEnumParentOverride ItemACLACLInheritanceTypeEnum = "PARENT_OVERRIDE"
	ItemACLACLInheritanceTypeEnumBothPermit     ItemACLACLInheritanceTypeEnum = "BOTH_PERMIT"
)

// ItemACL
// Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls).
type ItemACL struct {
	ACLInheritanceType *ItemACLACLInheritanceTypeEnum `json:"aclInheritanceType,omitempty"`
	DeniedReaders      []Principal                    `json:"deniedReaders,omitempty"`
	InheritACLFrom     *string                        `json:"inheritAclFrom,omitempty"`
	Owners             []Principal                    `json:"owners,omitempty"`
	Readers            []Principal                    `json:"readers,omitempty"`
}
