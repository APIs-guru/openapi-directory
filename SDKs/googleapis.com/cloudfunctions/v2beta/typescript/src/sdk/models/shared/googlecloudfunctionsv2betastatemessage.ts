import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudFunctionsV2betaStateMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}


// GoogleCloudFunctionsV2betaStateMessage
/** 
 * Informational messages about the state of the Cloud Function or Operation.
**/
export class GoogleCloudFunctionsV2betaStateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: GoogleCloudFunctionsV2betaStateMessageSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
