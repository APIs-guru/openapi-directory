package shared

type BatchUpdateContactsRequestSourcesEnum string

const (
	BatchUpdateContactsRequestSourcesEnumReadSourceTypeUnspecified   BatchUpdateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
	BatchUpdateContactsRequestSourcesEnumReadSourceTypeProfile       BatchUpdateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
	BatchUpdateContactsRequestSourcesEnumReadSourceTypeContact       BatchUpdateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
	BatchUpdateContactsRequestSourcesEnumReadSourceTypeDomainContact BatchUpdateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)

type BatchUpdateContactsRequest struct {
	Contacts   map[string]Person                       `json:"contacts"`
	ReadMask   *string                                 `json:"readMask"`
	Sources    []BatchUpdateContactsRequestSourcesEnum `json:"sources"`
	UpdateMask *string                                 `json:"updateMask"`
}
