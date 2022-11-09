import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescase";


// GoogleCloudDialogflowCxV3FulfillmentConditionalCases
/** 
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
export class GoogleCloudDialogflowCxV3FulfillmentConditionalCases extends SpeakeasyBase {
  @Metadata({ data: "json, name=cases", elemType: shared.GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase })
  cases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase[];
}
