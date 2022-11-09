import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3beta1ResponseMessage } from "./googleclouddialogflowcxv3beta1responsemessage";


// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent
/** 
 * The list of messages or conditional cases to activate for this case.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalCases" })
  additionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;

  @Metadata({ data: "json, name=message" })
  message?: GoogleCloudDialogflowCxV3beta1ResponseMessage;
}
