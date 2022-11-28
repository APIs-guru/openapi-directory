import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRequest } from "./httprequest";
import { MonitoredResourceMetadata } from "./monitoredresourcemetadata";
import { LogEntryOperation } from "./logentryoperation";
import { MonitoredResource } from "./monitoredresource";
import { LogEntrySourceLocation } from "./logentrysourcelocation";
import { LogSplit } from "./logsplit";
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
 * An individual entry in a log.
**/
export declare class LogEntryInput extends SpeakeasyBase {
    httpRequest?: HttpRequest;
    insertId?: string;
    jsonPayload?: Map<string, any>;
    labels?: Map<string, string>;
    logName?: string;
    metadata?: MonitoredResourceMetadata;
    operation?: LogEntryOperation;
    protoPayload?: Map<string, any>;
    resource?: MonitoredResource;
    severity?: LogEntrySeverityEnum;
    sourceLocation?: LogEntrySourceLocation;
    spanId?: string;
    split?: LogSplit;
    textPayload?: string;
    timestamp?: string;
    trace?: string;
    traceSampled?: boolean;
}
/**
 * An individual entry in a log.
**/
export declare class LogEntry extends SpeakeasyBase {
    httpRequest?: HttpRequest;
    insertId?: string;
    jsonPayload?: Map<string, any>;
    labels?: Map<string, string>;
    logName?: string;
    metadata?: MonitoredResourceMetadata;
    operation?: LogEntryOperation;
    protoPayload?: Map<string, any>;
    receiveTimestamp?: string;
    resource?: MonitoredResource;
    severity?: LogEntrySeverityEnum;
    sourceLocation?: LogEntrySourceLocation;
    spanId?: string;
    split?: LogSplit;
    textPayload?: string;
    timestamp?: string;
    trace?: string;
    traceSampled?: boolean;
}
