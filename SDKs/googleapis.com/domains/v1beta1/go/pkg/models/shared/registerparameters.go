package shared

type RegisterParametersAvailabilityEnum string

const (
	RegisterParametersAvailabilityEnumAvailabilityUnspecified RegisterParametersAvailabilityEnum = "AVAILABILITY_UNSPECIFIED"
	RegisterParametersAvailabilityEnumAvailable               RegisterParametersAvailabilityEnum = "AVAILABLE"
	RegisterParametersAvailabilityEnumUnavailable             RegisterParametersAvailabilityEnum = "UNAVAILABLE"
	RegisterParametersAvailabilityEnumUnsupported             RegisterParametersAvailabilityEnum = "UNSUPPORTED"
	RegisterParametersAvailabilityEnumUnknown                 RegisterParametersAvailabilityEnum = "UNKNOWN"
)

type RegisterParametersDomainNoticesEnum string

const (
	RegisterParametersDomainNoticesEnumDomainNoticeUnspecified RegisterParametersDomainNoticesEnum = "DOMAIN_NOTICE_UNSPECIFIED"
	RegisterParametersDomainNoticesEnumHstsPreloaded           RegisterParametersDomainNoticesEnum = "HSTS_PRELOADED"
)

type RegisterParametersSupportedPrivacyEnum string

const (
	RegisterParametersSupportedPrivacyEnumContactPrivacyUnspecified RegisterParametersSupportedPrivacyEnum = "CONTACT_PRIVACY_UNSPECIFIED"
	RegisterParametersSupportedPrivacyEnumPublicContactData         RegisterParametersSupportedPrivacyEnum = "PUBLIC_CONTACT_DATA"
	RegisterParametersSupportedPrivacyEnumPrivateContactData        RegisterParametersSupportedPrivacyEnum = "PRIVATE_CONTACT_DATA"
	RegisterParametersSupportedPrivacyEnumRedactedContactData       RegisterParametersSupportedPrivacyEnum = "REDACTED_CONTACT_DATA"
)

type RegisterParameters struct {
	Availability     *RegisterParametersAvailabilityEnum      `json:"availability"`
	DomainName       *string                                  `json:"domainName"`
	DomainNotices    []RegisterParametersDomainNoticesEnum    `json:"domainNotices"`
	SupportedPrivacy []RegisterParametersSupportedPrivacyEnum `json:"supportedPrivacy"`
	YearlyPrice      *Money                                   `json:"yearlyPrice"`
}
