import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DataAccessOptionsLogModeEnum {
    LogModeUnspecified = "LOG_MODE_UNSPECIFIED",
    LogFailClosed = "LOG_FAIL_CLOSED"
}
/**
 * Write a Data Access (Gin) log
**/
export declare class DataAccessOptions extends SpeakeasyBase {
    logMode?: DataAccessOptionsLogModeEnum;
}
