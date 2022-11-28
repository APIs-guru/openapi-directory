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

// RegisterDomainRequestInput
// Request for the `RegisterDomain` method.
type RegisterDomainRequestInput struct {
	ContactNotices []RegisterDomainRequestContactNoticesEnum `json:"contactNotices,omitempty"`
	DomainNotices  []RegisterDomainRequestDomainNoticesEnum  `json:"domainNotices,omitempty"`
	Registration   *RegistrationInput                        `json:"registration,omitempty"`
	ValidateOnly   *bool                                     `json:"validateOnly,omitempty"`
	YearlyPrice    *Money                                    `json:"yearlyPrice,omitempty"`
}
