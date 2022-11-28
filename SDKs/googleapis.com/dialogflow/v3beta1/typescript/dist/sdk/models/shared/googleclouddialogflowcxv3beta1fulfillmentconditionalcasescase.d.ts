import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescasecasecontent";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescasecasecontent";
/**
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
export declare class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput extends SpeakeasyBase {
    caseContent?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput[];
    condition?: string;
}
/**
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
export declare class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase extends SpeakeasyBase {
    caseContent?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent[];
    condition?: string;
}
