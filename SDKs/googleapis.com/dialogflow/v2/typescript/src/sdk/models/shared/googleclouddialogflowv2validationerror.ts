import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2ValidationErrorSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Critical = "CRITICAL"
}


// GoogleCloudDialogflowV2ValidationError
/** 
 * Represents a single validation error.
**/
export class GoogleCloudDialogflowV2ValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries" })
  entries?: string[];

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: GoogleCloudDialogflowV2ValidationErrorSeverityEnum;
}
