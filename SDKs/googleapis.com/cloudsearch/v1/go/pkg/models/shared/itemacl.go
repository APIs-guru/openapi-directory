package shared

type ItemACLACLInheritanceTypeEnum string

const (
	ItemACLACLInheritanceTypeEnumNotApplicable  ItemACLACLInheritanceTypeEnum = "NOT_APPLICABLE"
	ItemACLACLInheritanceTypeEnumChildOverride  ItemACLACLInheritanceTypeEnum = "CHILD_OVERRIDE"
	ItemACLACLInheritanceTypeEnumParentOverride ItemACLACLInheritanceTypeEnum = "PARENT_OVERRIDE"
	ItemACLACLInheritanceTypeEnumBothPermit     ItemACLACLInheritanceTypeEnum = "BOTH_PERMIT"
)

type ItemACL struct {
	ACLInheritanceType *ItemACLACLInheritanceTypeEnum `json:"aclInheritanceType"`
	DeniedReaders      []Principal                    `json:"deniedReaders"`
	InheritACLFrom     *string                        `json:"inheritAclFrom"`
	Owners             []Principal                    `json:"owners"`
	Readers            []Principal                    `json:"readers"`
}
