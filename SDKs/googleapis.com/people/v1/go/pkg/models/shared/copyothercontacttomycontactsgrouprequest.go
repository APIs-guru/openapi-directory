package shared

type CopyOtherContactToMyContactsGroupRequestSourcesEnum string

const (
	CopyOtherContactToMyContactsGroupRequestSourcesEnumReadSourceTypeUnspecified   CopyOtherContactToMyContactsGroupRequestSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
	CopyOtherContactToMyContactsGroupRequestSourcesEnumReadSourceTypeProfile       CopyOtherContactToMyContactsGroupRequestSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
	CopyOtherContactToMyContactsGroupRequestSourcesEnumReadSourceTypeContact       CopyOtherContactToMyContactsGroupRequestSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
	CopyOtherContactToMyContactsGroupRequestSourcesEnumReadSourceTypeDomainContact CopyOtherContactToMyContactsGroupRequestSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)

type CopyOtherContactToMyContactsGroupRequest struct {
	CopyMask *string                                               `json:"copyMask"`
	ReadMask *string                                               `json:"readMask"`
	Sources  []CopyOtherContactToMyContactsGroupRequestSourcesEnum `json:"sources"`
}
