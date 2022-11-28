package shared

type RegistrationIssuesEnum string

const (
	RegistrationIssuesEnumIssueUnspecified RegistrationIssuesEnum = "ISSUE_UNSPECIFIED"
	RegistrationIssuesEnumContactSupport   RegistrationIssuesEnum = "CONTACT_SUPPORT"
	RegistrationIssuesEnumUnverifiedEmail  RegistrationIssuesEnum = "UNVERIFIED_EMAIL"
)

type RegistrationRegisterFailureReasonEnum string

const (
	RegistrationRegisterFailureReasonEnumRegisterFailureReasonUnspecified RegistrationRegisterFailureReasonEnum = "REGISTER_FAILURE_REASON_UNSPECIFIED"
	RegistrationRegisterFailureReasonEnumRegisterFailureReasonUnknown     RegistrationRegisterFailureReasonEnum = "REGISTER_FAILURE_REASON_UNKNOWN"
	RegistrationRegisterFailureReasonEnumDomainNotAvailable               RegistrationRegisterFailureReasonEnum = "DOMAIN_NOT_AVAILABLE"
	RegistrationRegisterFailureReasonEnumInvalidContacts                  RegistrationRegisterFailureReasonEnum = "INVALID_CONTACTS"
)

type RegistrationStateEnum string

const (
	RegistrationStateEnumStateUnspecified    RegistrationStateEnum = "STATE_UNSPECIFIED"
	RegistrationStateEnumRegistrationPending RegistrationStateEnum = "REGISTRATION_PENDING"
	RegistrationStateEnumRegistrationFailed  RegistrationStateEnum = "REGISTRATION_FAILED"
	RegistrationStateEnumTransferPending     RegistrationStateEnum = "TRANSFER_PENDING"
	RegistrationStateEnumTransferFailed      RegistrationStateEnum = "TRANSFER_FAILED"
	RegistrationStateEnumImportPending       RegistrationStateEnum = "IMPORT_PENDING"
	RegistrationStateEnumActive              RegistrationStateEnum = "ACTIVE"
	RegistrationStateEnumSuspended           RegistrationStateEnum = "SUSPENDED"
	RegistrationStateEnumExported            RegistrationStateEnum = "EXPORTED"
)

type RegistrationSupportedPrivacyEnum string

const (
	RegistrationSupportedPrivacyEnumContactPrivacyUnspecified RegistrationSupportedPrivacyEnum = "CONTACT_PRIVACY_UNSPECIFIED"
	RegistrationSupportedPrivacyEnumPublicContactData         RegistrationSupportedPrivacyEnum = "PUBLIC_CONTACT_DATA"
	RegistrationSupportedPrivacyEnumPrivateContactData        RegistrationSupportedPrivacyEnum = "PRIVATE_CONTACT_DATA"
	RegistrationSupportedPrivacyEnumRedactedContactData       RegistrationSupportedPrivacyEnum = "REDACTED_CONTACT_DATA"
)

type RegistrationTransferFailureReasonEnum string

const (
	RegistrationTransferFailureReasonEnumTransferFailureReasonUnspecified RegistrationTransferFailureReasonEnum = "TRANSFER_FAILURE_REASON_UNSPECIFIED"
	RegistrationTransferFailureReasonEnumTransferFailureReasonUnknown     RegistrationTransferFailureReasonEnum = "TRANSFER_FAILURE_REASON_UNKNOWN"
	RegistrationTransferFailureReasonEnumEmailConfirmationFailure         RegistrationTransferFailureReasonEnum = "EMAIL_CONFIRMATION_FAILURE"
	RegistrationTransferFailureReasonEnumDomainNotRegistered              RegistrationTransferFailureReasonEnum = "DOMAIN_NOT_REGISTERED"
	RegistrationTransferFailureReasonEnumDomainHasTransferLock            RegistrationTransferFailureReasonEnum = "DOMAIN_HAS_TRANSFER_LOCK"
	RegistrationTransferFailureReasonEnumInvalidAuthorizationCode         RegistrationTransferFailureReasonEnum = "INVALID_AUTHORIZATION_CODE"
	RegistrationTransferFailureReasonEnumTransferCancelled                RegistrationTransferFailureReasonEnum = "TRANSFER_CANCELLED"
	RegistrationTransferFailureReasonEnumTransferRejected                 RegistrationTransferFailureReasonEnum = "TRANSFER_REJECTED"
	RegistrationTransferFailureReasonEnumInvalidRegistrantEmailAddress    RegistrationTransferFailureReasonEnum = "INVALID_REGISTRANT_EMAIL_ADDRESS"
	RegistrationTransferFailureReasonEnumDomainNotEligibleForTransfer     RegistrationTransferFailureReasonEnum = "DOMAIN_NOT_ELIGIBLE_FOR_TRANSFER"
	RegistrationTransferFailureReasonEnumTransferAlreadyPending           RegistrationTransferFailureReasonEnum = "TRANSFER_ALREADY_PENDING"
)

// Registration
// The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
type Registration struct {
	ContactSettings        *ContactSettings                       `json:"contactSettings,omitempty"`
	CreateTime             *string                                `json:"createTime,omitempty"`
	DNSSettings            *DNSSettings                           `json:"dnsSettings,omitempty"`
	DomainName             *string                                `json:"domainName,omitempty"`
	ExpireTime             *string                                `json:"expireTime,omitempty"`
	Issues                 []RegistrationIssuesEnum               `json:"issues,omitempty"`
	Labels                 map[string]string                      `json:"labels,omitempty"`
	ManagementSettings     *ManagementSettings                    `json:"managementSettings,omitempty"`
	Name                   *string                                `json:"name,omitempty"`
	PendingContactSettings *ContactSettings                       `json:"pendingContactSettings,omitempty"`
	RegisterFailureReason  *RegistrationRegisterFailureReasonEnum `json:"registerFailureReason,omitempty"`
	State                  *RegistrationStateEnum                 `json:"state,omitempty"`
	SupportedPrivacy       []RegistrationSupportedPrivacyEnum     `json:"supportedPrivacy,omitempty"`
	TransferFailureReason  *RegistrationTransferFailureReasonEnum `json:"transferFailureReason,omitempty"`
}

// RegistrationInput
// The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
type RegistrationInput struct {
	ContactSettings        *ContactSettings         `json:"contactSettings,omitempty"`
	DNSSettings            *DNSSettingsInput        `json:"dnsSettings,omitempty"`
	DomainName             *string                  `json:"domainName,omitempty"`
	Labels                 map[string]string        `json:"labels,omitempty"`
	ManagementSettings     *ManagementSettingsInput `json:"managementSettings,omitempty"`
	PendingContactSettings *ContactSettings         `json:"pendingContactSettings,omitempty"`
}
