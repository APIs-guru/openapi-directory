import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LoggingConfigDriverLogLevelsEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED",
    All = "ALL",
    Trace = "TRACE",
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Fatal = "FATAL",
    Off = "OFF"
}


// LoggingConfig
/** 
 * The runtime logging config of the job.
**/
export class LoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=driverLogLevels" })
  driverLogLevels?: Map<string, LoggingConfigDriverLogLevelsEnum>;
}
