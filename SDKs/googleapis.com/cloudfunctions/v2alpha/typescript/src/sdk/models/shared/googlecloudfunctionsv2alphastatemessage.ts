import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudFunctionsV2alphaStateMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Error = "ERROR"
,    Warning = "WARNING"
,    Info = "INFO"
}


// GoogleCloudFunctionsV2alphaStateMessage
/** 
 * Informational messages about the state of the Cloud Function or Operation.
**/
export class GoogleCloudFunctionsV2alphaStateMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: GoogleCloudFunctionsV2alphaStateMessageSeverityEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
