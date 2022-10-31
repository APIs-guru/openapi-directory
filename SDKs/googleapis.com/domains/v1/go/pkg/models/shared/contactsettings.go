package shared




type ContactSettingsPrivacyEnum string

const (
    ContactSettingsPrivacyEnumContactPrivacyUnspecified ContactSettingsPrivacyEnum = "CONTACT_PRIVACY_UNSPECIFIED"
ContactSettingsPrivacyEnumPublicContactData ContactSettingsPrivacyEnum = "PUBLIC_CONTACT_DATA"
ContactSettingsPrivacyEnumPrivateContactData ContactSettingsPrivacyEnum = "PRIVATE_CONTACT_DATA"
ContactSettingsPrivacyEnumRedactedContactData ContactSettingsPrivacyEnum = "REDACTED_CONTACT_DATA"
)


type ContactSettings struct {
    AdminContact *Contact `json:"adminContact,omitempty"`
    Privacy *ContactSettingsPrivacyEnum `json:"privacy,omitempty"`
    RegistrantContact *Contact `json:"registrantContact,omitempty"`
    TechnicalContact *Contact `json:"technicalContact,omitempty"`
    
}

