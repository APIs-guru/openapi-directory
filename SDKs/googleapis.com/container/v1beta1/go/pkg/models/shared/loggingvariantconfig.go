package shared

type LoggingVariantConfigVariantEnum string

const (
	LoggingVariantConfigVariantEnumVariantUnspecified LoggingVariantConfigVariantEnum = "VARIANT_UNSPECIFIED"
	LoggingVariantConfigVariantEnumDefault            LoggingVariantConfigVariantEnum = "DEFAULT"
	LoggingVariantConfigVariantEnumMaxThroughput      LoggingVariantConfigVariantEnum = "MAX_THROUGHPUT"
)

// LoggingVariantConfig
// LoggingVariantConfig specifies the behaviour of the logging component.
type LoggingVariantConfig struct {
	Variant *LoggingVariantConfigVariantEnum `json:"variant,omitempty"`
}
