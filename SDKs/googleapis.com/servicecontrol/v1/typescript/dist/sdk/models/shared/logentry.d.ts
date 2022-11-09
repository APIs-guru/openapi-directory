import { SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpRequest } from "./httprequest";
import { LogEntryOperation } from "./logentryoperation";
import { LogEntrySourceLocation } from "./logentrysourcelocation";
export declare enum LogEntrySeverityEnum {
    Default = "DEFAULT",
    Debug = "DEBUG",
    Info = "INFO",
    Notice = "NOTICE",
    Warning = "WARNING",
    Error = "ERROR",
    Critical = "CRITICAL",
    Alert = "ALERT",
    Emergency = "EMERGENCY"
}
/**
 * An individual log entry.
**/
export declare class LogEntry extends SpeakeasyBase {
    httpRequest?: HttpRequest;
    insertId?: string;
    labels?: Map<string, string>;
    name?: string;
    operation?: LogEntryOperation;
    protoPayload?: Map<string, any>;
    severity?: LogEntrySeverityEnum;
    sourceLocation?: LogEntrySourceLocation;
    structPayload?: Map<string, any>;
    textPayload?: string;
    timestamp?: string;
    trace?: string;
}
