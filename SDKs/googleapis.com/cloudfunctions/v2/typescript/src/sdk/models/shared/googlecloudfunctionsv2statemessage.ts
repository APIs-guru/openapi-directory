import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudFunctionsV2StateMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}


// GoogleCloudFunctionsV2StateMessage
/** 
 * Informational messages about the state of the Cloud Function or Operation.
**/
export class GoogleCloudFunctionsV2StateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: GoogleCloudFunctionsV2StateMessageSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
