package shared

type RegisterDomainRequestContactNoticesEnum string

const (
	RegisterDomainRequestContactNoticesEnumContactNoticeUnspecified         RegisterDomainRequestContactNoticesEnum = "CONTACT_NOTICE_UNSPECIFIED"
	RegisterDomainRequestContactNoticesEnumPublicContactDataAcknowledgement RegisterDomainRequestContactNoticesEnum = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
)

type RegisterDomainRequestDomainNoticesEnum string

const (
	RegisterDomainRequestDomainNoticesEnumDomainNoticeUnspecified RegisterDomainRequestDomainNoticesEnum = "DOMAIN_NOTICE_UNSPECIFIED"
	RegisterDomainRequestDomainNoticesEnumHstsPreloaded           RegisterDomainRequestDomainNoticesEnum = "HSTS_PRELOADED"
)

type RegisterDomainRequest struct {
	ContactNotices []RegisterDomainRequestContactNoticesEnum `json:"contactNotices"`
	DomainNotices  []RegisterDomainRequestDomainNoticesEnum  `json:"domainNotices"`
	Registration   *Registration                             `json:"registration"`
	ValidateOnly   *bool                                     `json:"validateOnly"`
	YearlyPrice    *Money                                    `json:"yearlyPrice"`
}
