package shared

type ExportOptionsRegionEnum string

const (
	ExportOptionsRegionEnumExportRegionUnspecified ExportOptionsRegionEnum = "EXPORT_REGION_UNSPECIFIED"
	ExportOptionsRegionEnumAny                     ExportOptionsRegionEnum = "ANY"
	ExportOptionsRegionEnumUs                      ExportOptionsRegionEnum = "US"
	ExportOptionsRegionEnumEurope                  ExportOptionsRegionEnum = "EUROPE"
)

type ExportOptions struct {
	DriveOptions        *DriveExportOptions        `json:"driveOptions"`
	GroupsOptions       *GroupsExportOptions       `json:"groupsOptions"`
	HangoutsChatOptions *HangoutsChatExportOptions `json:"hangoutsChatOptions"`
	MailOptions         *MailExportOptions         `json:"mailOptions"`
	Region              *ExportOptionsRegionEnum   `json:"region"`
	VoiceOptions        *VoiceExportOptions        `json:"voiceOptions"`
}
