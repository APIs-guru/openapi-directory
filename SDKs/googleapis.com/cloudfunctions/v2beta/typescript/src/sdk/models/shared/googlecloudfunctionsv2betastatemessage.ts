import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudFunctionsV2betaStateMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Error = "ERROR"
,    Warning = "WARNING"
,    Info = "INFO"
}


// GoogleCloudFunctionsV2betaStateMessage
/** 
 * Informational messages about the state of the Cloud Function or Operation.
**/
export class GoogleCloudFunctionsV2betaStateMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: GoogleCloudFunctionsV2betaStateMessageSeverityEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
