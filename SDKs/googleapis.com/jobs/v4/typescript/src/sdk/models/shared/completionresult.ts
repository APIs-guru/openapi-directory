import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CompletionResultTypeEnum {
    CompletionTypeUnspecified = "COMPLETION_TYPE_UNSPECIFIED",
    JobTitle = "JOB_TITLE",
    CompanyName = "COMPANY_NAME",
    Combined = "COMBINED"
}


// CompletionResult
/** 
 * Resource that represents completion results.
**/
export class CompletionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestion" })
  suggestion?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CompletionResultTypeEnum;
}
