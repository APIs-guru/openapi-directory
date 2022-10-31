package shared




type BatchCreateContactsRequestSourcesEnum string

const (
    BatchCreateContactsRequestSourcesEnumReadSourceTypeUnspecified BatchCreateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
BatchCreateContactsRequestSourcesEnumReadSourceTypeProfile BatchCreateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
BatchCreateContactsRequestSourcesEnumReadSourceTypeContact BatchCreateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
BatchCreateContactsRequestSourcesEnumReadSourceTypeDomainContact BatchCreateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)


type BatchCreateContactsRequest struct {
    Contacts []ContactToCreate `json:"contacts,omitempty"`
    ReadMask *string `json:"readMask,omitempty"`
    Sources []BatchCreateContactsRequestSourcesEnum `json:"sources,omitempty"`
    
}

