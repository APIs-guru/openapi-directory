package shared

type ContactSettingsPrivacyEnum string

const (
	ContactSettingsPrivacyEnumContactPrivacyUnspecified ContactSettingsPrivacyEnum = "CONTACT_PRIVACY_UNSPECIFIED"
	ContactSettingsPrivacyEnumPublicContactData         ContactSettingsPrivacyEnum = "PUBLIC_CONTACT_DATA"
	ContactSettingsPrivacyEnumPrivateContactData        ContactSettingsPrivacyEnum = "PRIVATE_CONTACT_DATA"
	ContactSettingsPrivacyEnumRedactedContactData       ContactSettingsPrivacyEnum = "REDACTED_CONTACT_DATA"
)

// ContactSettings
// Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
type ContactSettings struct {
	AdminContact      *Contact                    `json:"adminContact,omitempty"`
	Privacy           *ContactSettingsPrivacyEnum `json:"privacy,omitempty"`
	RegistrantContact *Contact                    `json:"registrantContact,omitempty"`
	TechnicalContact  *Contact                    `json:"technicalContact,omitempty"`
}
