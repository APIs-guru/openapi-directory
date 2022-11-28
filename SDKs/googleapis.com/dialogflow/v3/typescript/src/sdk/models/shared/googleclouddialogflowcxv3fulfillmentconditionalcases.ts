import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescase";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescase";



// GoogleCloudDialogflowCxV3FulfillmentConditionalCases
/** 
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
export class GoogleCloudDialogflowCxV3FulfillmentConditionalCases extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cases", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase })
  cases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase[];
}


// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput
/** 
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
export class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cases", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput })
  cases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput[];
}
