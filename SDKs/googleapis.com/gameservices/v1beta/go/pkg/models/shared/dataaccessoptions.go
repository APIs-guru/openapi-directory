package shared




type DataAccessOptionsLogModeEnum string

const (
    DataAccessOptionsLogModeEnumLogModeUnspecified DataAccessOptionsLogModeEnum = "LOG_MODE_UNSPECIFIED"
DataAccessOptionsLogModeEnumLogFailClosed DataAccessOptionsLogModeEnum = "LOG_FAIL_CLOSED"
)


type DataAccessOptions struct {
    LogMode *DataAccessOptionsLogModeEnum `json:"logMode,omitempty"`
    
}

