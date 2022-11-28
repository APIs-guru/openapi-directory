package shared

// VacationSettings
// Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.
type VacationSettings struct {
	EnableAutoReply       *bool   `json:"enableAutoReply,omitempty"`
	EndTime               *string `json:"endTime,omitempty"`
	ResponseBodyHTML      *string `json:"responseBodyHtml,omitempty"`
	ResponseBodyPlainText *string `json:"responseBodyPlainText,omitempty"`
	ResponseSubject       *string `json:"responseSubject,omitempty"`
	RestrictToContacts    *bool   `json:"restrictToContacts,omitempty"`
	RestrictToDomain      *bool   `json:"restrictToDomain,omitempty"`
	StartTime             *string `json:"startTime,omitempty"`
}
