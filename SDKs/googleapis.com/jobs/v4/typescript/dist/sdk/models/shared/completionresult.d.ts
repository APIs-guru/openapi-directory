import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CompletionResultTypeEnum {
    CompletionTypeUnspecified = "COMPLETION_TYPE_UNSPECIFIED",
    JobTitle = "JOB_TITLE",
    CompanyName = "COMPANY_NAME",
    Combined = "COMBINED"
}
/**
 * Resource that represents completion results.
**/
export declare class CompletionResult extends SpeakeasyBase {
    imageUri?: string;
    suggestion?: string;
    type?: CompletionResultTypeEnum;
}
