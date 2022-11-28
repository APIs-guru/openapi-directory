import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRequest } from "./httprequest";
import { LogEntryOperation } from "./logentryoperation";
import { LogEntrySourceLocation } from "./logentrysourcelocation";


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


// LogEntry
/** 
 * An individual log entry.
**/
export class LogEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequest;

  @SpeakeasyMetadata({ data: "json, name=insertId" })
  insertId?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: LogEntryOperation;

  @SpeakeasyMetadata({ data: "json, name=protoPayload" })
  protoPayload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: LogEntrySeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceLocation" })
  sourceLocation?: LogEntrySourceLocation;

  @SpeakeasyMetadata({ data: "json, name=structPayload" })
  structPayload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=textPayload" })
  textPayload?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=trace" })
  trace?: string;
}
