package shared

type CustomVoiceParamsReportedUsageEnum string

const (
	CustomVoiceParamsReportedUsageEnumReportedUsageUnspecified CustomVoiceParamsReportedUsageEnum = "REPORTED_USAGE_UNSPECIFIED"
	CustomVoiceParamsReportedUsageEnumRealtime                 CustomVoiceParamsReportedUsageEnum = "REALTIME"
	CustomVoiceParamsReportedUsageEnumOffline                  CustomVoiceParamsReportedUsageEnum = "OFFLINE"
)

type CustomVoiceParams struct {
	Model         *string                             `json:"model,omitempty"`
	ReportedUsage *CustomVoiceParamsReportedUsageEnum `json:"reportedUsage,omitempty"`
}
