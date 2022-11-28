import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudFunctionsV2alphaStateMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}


// GoogleCloudFunctionsV2alphaStateMessage
/** 
 * Informational messages about the state of the Cloud Function or Operation.
**/
export class GoogleCloudFunctionsV2alphaStateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: GoogleCloudFunctionsV2alphaStateMessageSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
