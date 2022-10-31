package shared




type BatchUpdateContactsRequestSourcesEnum string

const (
    BatchUpdateContactsRequestSourcesEnumReadSourceTypeUnspecified BatchUpdateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
BatchUpdateContactsRequestSourcesEnumReadSourceTypeProfile BatchUpdateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
BatchUpdateContactsRequestSourcesEnumReadSourceTypeContact BatchUpdateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
BatchUpdateContactsRequestSourcesEnumReadSourceTypeDomainContact BatchUpdateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)


type BatchUpdateContactsRequest struct {
    Contacts map[string]Person `json:"contacts,omitempty"`
    ReadMask *string `json:"readMask,omitempty"`
    Sources []BatchUpdateContactsRequestSourcesEnum `json:"sources,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

