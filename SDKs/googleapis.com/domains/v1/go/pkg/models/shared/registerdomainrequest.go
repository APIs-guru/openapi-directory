package shared




type RegisterDomainRequestContactNoticesEnum string

const (
    RegisterDomainRequestContactNoticesEnumContactNoticeUnspecified RegisterDomainRequestContactNoticesEnum = "CONTACT_NOTICE_UNSPECIFIED"
RegisterDomainRequestContactNoticesEnumPublicContactDataAcknowledgement RegisterDomainRequestContactNoticesEnum = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
)



type RegisterDomainRequestDomainNoticesEnum string

const (
    RegisterDomainRequestDomainNoticesEnumDomainNoticeUnspecified RegisterDomainRequestDomainNoticesEnum = "DOMAIN_NOTICE_UNSPECIFIED"
RegisterDomainRequestDomainNoticesEnumHstsPreloaded RegisterDomainRequestDomainNoticesEnum = "HSTS_PRELOADED"
)


type RegisterDomainRequest struct {
    ContactNotices []RegisterDomainRequestContactNoticesEnum `json:"contactNotices,omitempty"`
    DomainNotices []RegisterDomainRequestDomainNoticesEnum `json:"domainNotices,omitempty"`
    Registration *Registration `json:"registration,omitempty"`
    ValidateOnly *bool `json:"validateOnly,omitempty"`
    YearlyPrice *Money `json:"yearlyPrice,omitempty"`
    
}

