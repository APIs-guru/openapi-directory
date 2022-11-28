package shared

type DataAccessOptionsLogModeEnum string

const (
	DataAccessOptionsLogModeEnumLogModeUnspecified DataAccessOptionsLogModeEnum = "LOG_MODE_UNSPECIFIED"
	DataAccessOptionsLogModeEnumLogFailClosed      DataAccessOptionsLogModeEnum = "LOG_FAIL_CLOSED"
)

// DataAccessOptions
// Write a Data Access (Gin) log
type DataAccessOptions struct {
	LogMode *DataAccessOptionsLogModeEnum `json:"logMode,omitempty"`
}
