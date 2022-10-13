package shared

type ReportsConfiguration struct {
	ExposureToConversionEnabled *bool                  `json:"exposureToConversionEnabled"`
	LookbackConfiguration       *LookbackConfiguration `json:"lookbackConfiguration"`
	ReportGenerationTimeZoneID  *string                `json:"reportGenerationTimeZoneId"`
}
