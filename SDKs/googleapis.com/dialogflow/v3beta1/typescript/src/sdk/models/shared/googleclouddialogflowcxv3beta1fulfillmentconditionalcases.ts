import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescase";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescase";



// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases
/** 
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cases", elemType: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase })
  cases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase[];
}


// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput
/** 
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cases", elemType: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput })
  cases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput[];
}
