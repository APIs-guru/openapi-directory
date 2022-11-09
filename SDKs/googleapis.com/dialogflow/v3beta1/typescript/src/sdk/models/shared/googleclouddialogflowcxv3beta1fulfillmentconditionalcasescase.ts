import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescasecasecontent";


// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase
/** 
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseContent", elemType: shared.GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent })
  caseContent?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent[];

  @Metadata({ data: "json, name=condition" })
  condition?: string;
}
