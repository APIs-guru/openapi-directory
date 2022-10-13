package shared

type ContactSettingsPrivacyEnum string

const (
	ContactSettingsPrivacyEnumContactPrivacyUnspecified ContactSettingsPrivacyEnum = "CONTACT_PRIVACY_UNSPECIFIED"
	ContactSettingsPrivacyEnumPublicContactData         ContactSettingsPrivacyEnum = "PUBLIC_CONTACT_DATA"
	ContactSettingsPrivacyEnumPrivateContactData        ContactSettingsPrivacyEnum = "PRIVATE_CONTACT_DATA"
	ContactSettingsPrivacyEnumRedactedContactData       ContactSettingsPrivacyEnum = "REDACTED_CONTACT_DATA"
)

type ContactSettings struct {
	AdminContact      *Contact                    `json:"adminContact"`
	Privacy           *ContactSettingsPrivacyEnum `json:"privacy"`
	RegistrantContact *Contact                    `json:"registrantContact"`
	TechnicalContact  *Contact                    `json:"technicalContact"`
}
