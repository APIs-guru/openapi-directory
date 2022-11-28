import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DataExecutionStatusErrorCodeEnum {
    DataExecutionErrorCodeUnspecified = "DATA_EXECUTION_ERROR_CODE_UNSPECIFIED",
    TimedOut = "TIMED_OUT",
    TooManyRows = "TOO_MANY_ROWS",
    TooManyColumns = "TOO_MANY_COLUMNS",
    TooManyCells = "TOO_MANY_CELLS",
    Engine = "ENGINE",
    ParameterInvalid = "PARAMETER_INVALID",
    UnsupportedDataType = "UNSUPPORTED_DATA_TYPE",
    DuplicateColumnNames = "DUPLICATE_COLUMN_NAMES",
    Interrupted = "INTERRUPTED",
    ConcurrentQuery = "CONCURRENT_QUERY",
    Other = "OTHER",
    TooManyCharsPerCell = "TOO_MANY_CHARS_PER_CELL",
    DataNotFound = "DATA_NOT_FOUND",
    PermissionDenied = "PERMISSION_DENIED",
    MissingColumnAlias = "MISSING_COLUMN_ALIAS",
    ObjectNotFound = "OBJECT_NOT_FOUND",
    ObjectInErrorState = "OBJECT_IN_ERROR_STATE",
    ObjectSpecInvalid = "OBJECT_SPEC_INVALID"
}
export declare enum DataExecutionStatusStateEnum {
    DataExecutionStateUnspecified = "DATA_EXECUTION_STATE_UNSPECIFIED",
    NotStarted = "NOT_STARTED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects.
**/
export declare class DataExecutionStatus extends SpeakeasyBase {
    errorCode?: DataExecutionStatusErrorCodeEnum;
    errorMessage?: string;
    lastRefreshTime?: string;
    state?: DataExecutionStatusStateEnum;
}
