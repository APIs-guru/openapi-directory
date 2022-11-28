import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LoggingConfigDriverLogLevelsEnum {
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
/**
 * The runtime logging config of the job.
**/
export declare class LoggingConfig extends SpeakeasyBase {
    driverLogLevels?: Map<string, LoggingConfigDriverLogLevelsEnum>;
}
