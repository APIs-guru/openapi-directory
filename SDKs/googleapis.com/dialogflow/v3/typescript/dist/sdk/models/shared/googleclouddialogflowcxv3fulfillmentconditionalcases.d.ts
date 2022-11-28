import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescase";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescase";
/**
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
export declare class GoogleCloudDialogflowCxV3FulfillmentConditionalCases extends SpeakeasyBase {
    cases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase[];
}
/**
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
export declare class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput extends SpeakeasyBase {
    cases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput[];
}
