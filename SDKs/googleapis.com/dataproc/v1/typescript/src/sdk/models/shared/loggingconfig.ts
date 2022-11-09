import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LoggingConfigDriverLogLevelsEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED"
,    All = "ALL"
,    Trace = "TRACE"
,    Debug = "DEBUG"
,    Info = "INFO"
,    Warn = "WARN"
,    Error = "ERROR"
,    Fatal = "FATAL"
,    Off = "OFF"
}


// LoggingConfig
/** 
 * The runtime logging config of the job.
**/
export class LoggingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=driverLogLevels" })
  driverLogLevels?: Map<string, LoggingConfigDriverLogLevelsEnum>;
}
