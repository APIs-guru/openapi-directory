import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpRequest } from "./httprequest";
import { MonitoredResourceMetadata } from "./monitoredresourcemetadata";
import { LogEntryOperation } from "./logentryoperation";
import { MonitoredResource } from "./monitoredresource";
import { LogEntrySourceLocation } from "./logentrysourcelocation";
import { LogSplit } from "./logsplit";

export enum LogEntrySeverityEnum {
    Default = "DEFAULT"
,    Debug = "DEBUG"
,    Info = "INFO"
,    Notice = "NOTICE"
,    Warning = "WARNING"
,    Error = "ERROR"
,    Critical = "CRITICAL"
,    Alert = "ALERT"
,    Emergency = "EMERGENCY"
}


// LogEntry
/** 
 * An individual entry in a log.
**/
export class LogEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequest;

  @Metadata({ data: "json, name=insertId" })
  insertId?: string;

  @Metadata({ data: "json, name=jsonPayload" })
  jsonPayload?: Map<string, any>;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=logName" })
  logName?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: MonitoredResourceMetadata;

  @Metadata({ data: "json, name=operation" })
  operation?: LogEntryOperation;

  @Metadata({ data: "json, name=protoPayload" })
  protoPayload?: Map<string, any>;

  @Metadata({ data: "json, name=receiveTimestamp" })
  receiveTimestamp?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: MonitoredResource;

  @Metadata({ data: "json, name=severity" })
  severity?: LogEntrySeverityEnum;

  @Metadata({ data: "json, name=sourceLocation" })
  sourceLocation?: LogEntrySourceLocation;

  @Metadata({ data: "json, name=spanId" })
  spanId?: string;

  @Metadata({ data: "json, name=split" })
  split?: LogSplit;

  @Metadata({ data: "json, name=textPayload" })
  textPayload?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=trace" })
  trace?: string;

  @Metadata({ data: "json, name=traceSampled" })
  traceSampled?: boolean;
}
