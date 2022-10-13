package shared

type ConfigureContactSettingsRequestContactNoticesEnum string

const (
	ConfigureContactSettingsRequestContactNoticesEnumContactNoticeUnspecified         ConfigureContactSettingsRequestContactNoticesEnum = "CONTACT_NOTICE_UNSPECIFIED"
	ConfigureContactSettingsRequestContactNoticesEnumPublicContactDataAcknowledgement ConfigureContactSettingsRequestContactNoticesEnum = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
)

type ConfigureContactSettingsRequest struct {
	ContactNotices  []ConfigureContactSettingsRequestContactNoticesEnum `json:"contactNotices"`
	ContactSettings *ContactSettings                                    `json:"contactSettings"`
	UpdateMask      *string                                             `json:"updateMask"`
	ValidateOnly    *bool                                               `json:"validateOnly"`
}
