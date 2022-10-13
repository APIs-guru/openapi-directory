package shared

type TransferDomainRequestContactNoticesEnum string

const (
	TransferDomainRequestContactNoticesEnumContactNoticeUnspecified         TransferDomainRequestContactNoticesEnum = "CONTACT_NOTICE_UNSPECIFIED"
	TransferDomainRequestContactNoticesEnumPublicContactDataAcknowledgement TransferDomainRequestContactNoticesEnum = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
)

type TransferDomainRequest struct {
	AuthorizationCode *AuthorizationCode                        `json:"authorizationCode"`
	ContactNotices    []TransferDomainRequestContactNoticesEnum `json:"contactNotices"`
	Registration      *Registration                             `json:"registration"`
	ValidateOnly      *bool                                     `json:"validateOnly"`
	YearlyPrice       *Money                                    `json:"yearlyPrice"`
}
