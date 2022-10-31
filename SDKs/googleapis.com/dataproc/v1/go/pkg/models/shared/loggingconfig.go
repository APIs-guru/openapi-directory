package shared

type LoggingConfigDriverLogLevelsEnum string

const (
	LoggingConfigDriverLogLevelsEnumLevelUnspecified LoggingConfigDriverLogLevelsEnum = "LEVEL_UNSPECIFIED"
	LoggingConfigDriverLogLevelsEnumAll              LoggingConfigDriverLogLevelsEnum = "ALL"
	LoggingConfigDriverLogLevelsEnumTrace            LoggingConfigDriverLogLevelsEnum = "TRACE"
	LoggingConfigDriverLogLevelsEnumDebug            LoggingConfigDriverLogLevelsEnum = "DEBUG"
	LoggingConfigDriverLogLevelsEnumInfo             LoggingConfigDriverLogLevelsEnum = "INFO"
	LoggingConfigDriverLogLevelsEnumWarn             LoggingConfigDriverLogLevelsEnum = "WARN"
	LoggingConfigDriverLogLevelsEnumError            LoggingConfigDriverLogLevelsEnum = "ERROR"
	LoggingConfigDriverLogLevelsEnumFatal            LoggingConfigDriverLogLevelsEnum = "FATAL"
	LoggingConfigDriverLogLevelsEnumOff              LoggingConfigDriverLogLevelsEnum = "OFF"
)

type LoggingConfig struct {
	DriverLogLevels map[string]LoggingConfigDriverLogLevelsEnum `json:"driverLogLevels,omitempty"`
}
