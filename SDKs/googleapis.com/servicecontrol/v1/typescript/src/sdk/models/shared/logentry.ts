import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpRequest } from "./httprequest";
import { LogEntryOperation } from "./logentryoperation";
import { LogEntrySourceLocation } from "./logentrysourcelocation";

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
 * An individual log entry.
**/
export class LogEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequest;

  @Metadata({ data: "json, name=insertId" })
  insertId?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: LogEntryOperation;

  @Metadata({ data: "json, name=protoPayload" })
  protoPayload?: Map<string, any>;

  @Metadata({ data: "json, name=severity" })
  severity?: LogEntrySeverityEnum;

  @Metadata({ data: "json, name=sourceLocation" })
  sourceLocation?: LogEntrySourceLocation;

  @Metadata({ data: "json, name=structPayload" })
  structPayload?: Map<string, any>;

  @Metadata({ data: "json, name=textPayload" })
  textPayload?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=trace" })
  trace?: string;
}
