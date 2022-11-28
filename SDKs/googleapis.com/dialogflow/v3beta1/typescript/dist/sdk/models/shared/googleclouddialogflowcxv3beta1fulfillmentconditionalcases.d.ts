import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescase";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescase";
/**
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
export declare class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases extends SpeakeasyBase {
    cases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase[];
}
/**
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
export declare class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput extends SpeakeasyBase {
    cases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput[];
}
