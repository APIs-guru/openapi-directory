package shared

type DataExecutionStatusErrorCodeEnum string

const (
	DataExecutionStatusErrorCodeEnumDataExecutionErrorCodeUnspecified DataExecutionStatusErrorCodeEnum = "DATA_EXECUTION_ERROR_CODE_UNSPECIFIED"
	DataExecutionStatusErrorCodeEnumTimedOut                          DataExecutionStatusErrorCodeEnum = "TIMED_OUT"
	DataExecutionStatusErrorCodeEnumTooManyRows                       DataExecutionStatusErrorCodeEnum = "TOO_MANY_ROWS"
	DataExecutionStatusErrorCodeEnumTooManyColumns                    DataExecutionStatusErrorCodeEnum = "TOO_MANY_COLUMNS"
	DataExecutionStatusErrorCodeEnumTooManyCells                      DataExecutionStatusErrorCodeEnum = "TOO_MANY_CELLS"
	DataExecutionStatusErrorCodeEnumEngine                            DataExecutionStatusErrorCodeEnum = "ENGINE"
	DataExecutionStatusErrorCodeEnumParameterInvalid                  DataExecutionStatusErrorCodeEnum = "PARAMETER_INVALID"
	DataExecutionStatusErrorCodeEnumUnsupportedDataType               DataExecutionStatusErrorCodeEnum = "UNSUPPORTED_DATA_TYPE"
	DataExecutionStatusErrorCodeEnumDuplicateColumnNames              DataExecutionStatusErrorCodeEnum = "DUPLICATE_COLUMN_NAMES"
	DataExecutionStatusErrorCodeEnumInterrupted                       DataExecutionStatusErrorCodeEnum = "INTERRUPTED"
	DataExecutionStatusErrorCodeEnumConcurrentQuery                   DataExecutionStatusErrorCodeEnum = "CONCURRENT_QUERY"
	DataExecutionStatusErrorCodeEnumOther                             DataExecutionStatusErrorCodeEnum = "OTHER"
	DataExecutionStatusErrorCodeEnumTooManyCharsPerCell               DataExecutionStatusErrorCodeEnum = "TOO_MANY_CHARS_PER_CELL"
	DataExecutionStatusErrorCodeEnumDataNotFound                      DataExecutionStatusErrorCodeEnum = "DATA_NOT_FOUND"
	DataExecutionStatusErrorCodeEnumPermissionDenied                  DataExecutionStatusErrorCodeEnum = "PERMISSION_DENIED"
	DataExecutionStatusErrorCodeEnumMissingColumnAlias                DataExecutionStatusErrorCodeEnum = "MISSING_COLUMN_ALIAS"
	DataExecutionStatusErrorCodeEnumObjectNotFound                    DataExecutionStatusErrorCodeEnum = "OBJECT_NOT_FOUND"
	DataExecutionStatusErrorCodeEnumObjectInErrorState                DataExecutionStatusErrorCodeEnum = "OBJECT_IN_ERROR_STATE"
	DataExecutionStatusErrorCodeEnumObjectSpecInvalid                 DataExecutionStatusErrorCodeEnum = "OBJECT_SPEC_INVALID"
)

type DataExecutionStatusStateEnum string

const (
	DataExecutionStatusStateEnumDataExecutionStateUnspecified DataExecutionStatusStateEnum = "DATA_EXECUTION_STATE_UNSPECIFIED"
	DataExecutionStatusStateEnumNotStarted                    DataExecutionStatusStateEnum = "NOT_STARTED"
	DataExecutionStatusStateEnumRunning                       DataExecutionStatusStateEnum = "RUNNING"
	DataExecutionStatusStateEnumSucceeded                     DataExecutionStatusStateEnum = "SUCCEEDED"
	DataExecutionStatusStateEnumFailed                        DataExecutionStatusStateEnum = "FAILED"
)

type DataExecutionStatus struct {
	ErrorCode       *DataExecutionStatusErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage    *string                           `json:"errorMessage,omitempty"`
	LastRefreshTime *string                           `json:"lastRefreshTime,omitempty"`
	State           *DataExecutionStatusStateEnum     `json:"state,omitempty"`
}
