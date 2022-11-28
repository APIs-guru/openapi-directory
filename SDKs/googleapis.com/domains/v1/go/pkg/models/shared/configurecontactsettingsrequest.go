package shared

type ConfigureContactSettingsRequestContactNoticesEnum string

const (
	ConfigureContactSettingsRequestContactNoticesEnumContactNoticeUnspecified         ConfigureContactSettingsRequestContactNoticesEnum = "CONTACT_NOTICE_UNSPECIFIED"
	ConfigureContactSettingsRequestContactNoticesEnumPublicContactDataAcknowledgement ConfigureContactSettingsRequestContactNoticesEnum = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
)

// ConfigureContactSettingsRequest
// Request for the `ConfigureContactSettings` method.
type ConfigureContactSettingsRequest struct {
	ContactNotices  []ConfigureContactSettingsRequestContactNoticesEnum `json:"contactNotices,omitempty"`
	ContactSettings *ContactSettings                                    `json:"contactSettings,omitempty"`
	UpdateMask      *string                                             `json:"updateMask,omitempty"`
	ValidateOnly    *bool                                               `json:"validateOnly,omitempty"`
}
