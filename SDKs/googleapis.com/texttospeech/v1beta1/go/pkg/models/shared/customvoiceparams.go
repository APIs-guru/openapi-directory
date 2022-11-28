package shared

type CustomVoiceParamsReportedUsageEnum string

const (
	CustomVoiceParamsReportedUsageEnumReportedUsageUnspecified CustomVoiceParamsReportedUsageEnum = "REPORTED_USAGE_UNSPECIFIED"
	CustomVoiceParamsReportedUsageEnumRealtime                 CustomVoiceParamsReportedUsageEnum = "REALTIME"
	CustomVoiceParamsReportedUsageEnumOffline                  CustomVoiceParamsReportedUsageEnum = "OFFLINE"
)

// CustomVoiceParams
// Description of the custom voice to be synthesized.
type CustomVoiceParams struct {
	Model         *string                             `json:"model,omitempty"`
	ReportedUsage *CustomVoiceParamsReportedUsageEnum `json:"reportedUsage,omitempty"`
}
