import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DataAccessOptionsLogModeEnum {
    LogModeUnspecified = "LOG_MODE_UNSPECIFIED"
,    LogFailClosed = "LOG_FAIL_CLOSED"
}


// DataAccessOptions
/** 
 * Write a Data Access (Gin) log
**/
export class DataAccessOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=logMode" })
  logMode?: DataAccessOptionsLogModeEnum;
}
