import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescasecasecontent";


// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase
/** 
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
export class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseContent", elemType: shared.GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent })
  caseContent?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent[];

  @Metadata({ data: "json, name=condition" })
  condition?: string;
}
