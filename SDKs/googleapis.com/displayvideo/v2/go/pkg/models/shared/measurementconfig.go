package shared

// MeasurementConfig
// Measurement settings of a partner.
type MeasurementConfig struct {
	Dv360ToCmCostReportingEnabled *bool `json:"dv360ToCmCostReportingEnabled,omitempty"`
	Dv360ToCmDataSharingEnabled   *bool `json:"dv360ToCmDataSharingEnabled,omitempty"`
}
