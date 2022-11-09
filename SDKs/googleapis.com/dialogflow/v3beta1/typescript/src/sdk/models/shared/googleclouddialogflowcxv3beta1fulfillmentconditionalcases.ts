import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescase";


// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases
/** 
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases extends SpeakeasyBase {
  @Metadata({ data: "json, name=cases", elemType: shared.GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase })
  cases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase[];
}
