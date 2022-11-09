import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudFunctionsV2StateMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Error = "ERROR"
,    Warning = "WARNING"
,    Info = "INFO"
}


// GoogleCloudFunctionsV2StateMessage
/** 
 * Informational messages about the state of the Cloud Function or Operation.
**/
export class GoogleCloudFunctionsV2StateMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: GoogleCloudFunctionsV2StateMessageSeverityEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
