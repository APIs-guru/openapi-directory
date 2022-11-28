package shared

type TelemetryConfigLogFormatEnum string

const (
	TelemetryConfigLogFormatEnumLogFormatUnspecified TelemetryConfigLogFormatEnum = "LOG_FORMAT_UNSPECIFIED"
	TelemetryConfigLogFormatEnumLegacy               TelemetryConfigLogFormatEnum = "LEGACY"
	TelemetryConfigLogFormatEnumJSON                 TelemetryConfigLogFormatEnum = "JSON"
)

// TelemetryConfig
// Telemetry Configuration for the Dataproc Metastore service.
type TelemetryConfig struct {
	LogFormat *TelemetryConfigLogFormatEnum `json:"logFormat,omitempty"`
}
