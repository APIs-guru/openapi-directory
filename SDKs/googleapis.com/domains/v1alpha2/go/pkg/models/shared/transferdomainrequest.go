package shared

type TransferDomainRequestContactNoticesEnum string

const (
	TransferDomainRequestContactNoticesEnumContactNoticeUnspecified         TransferDomainRequestContactNoticesEnum = "CONTACT_NOTICE_UNSPECIFIED"
	TransferDomainRequestContactNoticesEnumPublicContactDataAcknowledgement TransferDomainRequestContactNoticesEnum = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
)

// TransferDomainRequestInput
// Request for the `TransferDomain` method.
type TransferDomainRequestInput struct {
	AuthorizationCode *AuthorizationCode                        `json:"authorizationCode,omitempty"`
	ContactNotices    []TransferDomainRequestContactNoticesEnum `json:"contactNotices,omitempty"`
	Registration      *RegistrationInput                        `json:"registration,omitempty"`
	ValidateOnly      *bool                                     `json:"validateOnly,omitempty"`
	YearlyPrice       *Money                                    `json:"yearlyPrice,omitempty"`
}
