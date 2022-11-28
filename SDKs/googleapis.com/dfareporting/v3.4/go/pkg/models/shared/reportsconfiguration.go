package shared

// ReportsConfiguration
// Reporting Configuration
type ReportsConfiguration struct {
	ExposureToConversionEnabled *bool                  `json:"exposureToConversionEnabled,omitempty"`
	LookbackConfiguration       *LookbackConfiguration `json:"lookbackConfiguration,omitempty"`
	ReportGenerationTimeZoneID  *string                `json:"reportGenerationTimeZoneId,omitempty"`
}
