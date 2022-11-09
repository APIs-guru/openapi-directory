import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Info = "INFO"
,    Warning = "WARNING"
,    Error = "ERROR"
,    Critical = "CRITICAL"
}


// GoogleCloudDialogflowV2beta1ValidationError
/** 
 * Represents a single validation error.
**/
export class GoogleCloudDialogflowV2beta1ValidationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries" })
  entries?: string[];

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum;
}
