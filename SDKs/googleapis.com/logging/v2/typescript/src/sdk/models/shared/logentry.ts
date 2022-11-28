import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRequest } from "./httprequest";
import { MonitoredResourceMetadata } from "./monitoredresourcemetadata";
import { LogEntryOperation } from "./logentryoperation";
import { MonitoredResource } from "./monitoredresource";
import { LogEntrySourceLocation } from "./logentrysourcelocation";
import { LogSplit } from "./logsplit";


export enum LogEntrySeverityEnum {
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


// LogEntryInput
/** 
 * An individual entry in a log.
**/
export class LogEntryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequest;

  @SpeakeasyMetadata({ data: "json, name=insertId" })
  insertId?: string;

  @SpeakeasyMetadata({ data: "json, name=jsonPayload" })
  jsonPayload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=logName" })
  logName?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: MonitoredResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: LogEntryOperation;

  @SpeakeasyMetadata({ data: "json, name=protoPayload" })
  protoPayload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: MonitoredResource;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: LogEntrySeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceLocation" })
  sourceLocation?: LogEntrySourceLocation;

  @SpeakeasyMetadata({ data: "json, name=spanId" })
  spanId?: string;

  @SpeakeasyMetadata({ data: "json, name=split" })
  split?: LogSplit;

  @SpeakeasyMetadata({ data: "json, name=textPayload" })
  textPayload?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=trace" })
  trace?: string;

  @SpeakeasyMetadata({ data: "json, name=traceSampled" })
  traceSampled?: boolean;
}


// LogEntry
/** 
 * An individual entry in a log.
**/
export class LogEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequest;

  @SpeakeasyMetadata({ data: "json, name=insertId" })
  insertId?: string;

  @SpeakeasyMetadata({ data: "json, name=jsonPayload" })
  jsonPayload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=logName" })
  logName?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: MonitoredResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: LogEntryOperation;

  @SpeakeasyMetadata({ data: "json, name=protoPayload" })
  protoPayload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=receiveTimestamp" })
  receiveTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: MonitoredResource;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: LogEntrySeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceLocation" })
  sourceLocation?: LogEntrySourceLocation;

  @SpeakeasyMetadata({ data: "json, name=spanId" })
  spanId?: string;

  @SpeakeasyMetadata({ data: "json, name=split" })
  split?: LogSplit;

  @SpeakeasyMetadata({ data: "json, name=textPayload" })
  textPayload?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=trace" })
  trace?: string;

  @SpeakeasyMetadata({ data: "json, name=traceSampled" })
  traceSampled?: boolean;
}
