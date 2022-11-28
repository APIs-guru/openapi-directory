package shared

type ExportOptionsRegionEnum string

const (
	ExportOptionsRegionEnumExportRegionUnspecified ExportOptionsRegionEnum = "EXPORT_REGION_UNSPECIFIED"
	ExportOptionsRegionEnumAny                     ExportOptionsRegionEnum = "ANY"
	ExportOptionsRegionEnumUs                      ExportOptionsRegionEnum = "US"
	ExportOptionsRegionEnumEurope                  ExportOptionsRegionEnum = "EUROPE"
)

// ExportOptions
// Additional options for exports
type ExportOptions struct {
	DriveOptions        *DriveExportOptions        `json:"driveOptions,omitempty"`
	GroupsOptions       *GroupsExportOptions       `json:"groupsOptions,omitempty"`
	HangoutsChatOptions *HangoutsChatExportOptions `json:"hangoutsChatOptions,omitempty"`
	MailOptions         *MailExportOptions         `json:"mailOptions,omitempty"`
	Region              *ExportOptionsRegionEnum   `json:"region,omitempty"`
	VoiceOptions        *VoiceExportOptions        `json:"voiceOptions,omitempty"`
}
