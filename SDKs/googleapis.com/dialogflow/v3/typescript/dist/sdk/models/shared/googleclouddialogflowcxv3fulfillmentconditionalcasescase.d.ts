import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescasecasecontent";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescasecasecontent";
/**
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
export declare class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase extends SpeakeasyBase {
    caseContent?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent[];
    condition?: string;
}
/**
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
export declare class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput extends SpeakeasyBase {
    caseContent?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput[];
    condition?: string;
}
