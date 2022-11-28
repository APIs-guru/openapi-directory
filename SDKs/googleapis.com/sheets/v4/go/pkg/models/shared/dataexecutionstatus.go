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

// DataExecutionStatus
// The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects.
type DataExecutionStatus struct {
	ErrorCode       *DataExecutionStatusErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage    *string                           `json:"errorMessage,omitempty"`
	LastRefreshTime *string                           `json:"lastRefreshTime,omitempty"`
	State           *DataExecutionStatusStateEnum     `json:"state,omitempty"`
}
