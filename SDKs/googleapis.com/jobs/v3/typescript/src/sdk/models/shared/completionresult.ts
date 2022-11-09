import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CompletionResultTypeEnum {
    CompletionTypeUnspecified = "COMPLETION_TYPE_UNSPECIFIED"
,    JobTitle = "JOB_TITLE"
,    CompanyName = "COMPANY_NAME"
,    Combined = "COMBINED"
}


// CompletionResult
/** 
 * Output only. Resource that represents completion results.
**/
export class CompletionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=suggestion" })
  suggestion?: string;

  @Metadata({ data: "json, name=type" })
  type?: CompletionResultTypeEnum;
}
