import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3beta1ResponseMessage } from "./googleclouddialogflowcxv3beta1responsemessage";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageInput } from "./googleclouddialogflowcxv3beta1responsemessage";



// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent
/** 
 * The list of messages or conditional cases to activate for this case.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalCases" })
  additionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: GoogleCloudDialogflowCxV3beta1ResponseMessage;
}


// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput
/** 
 * The list of messages or conditional cases to activate for this case.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalCases" })
  additionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: GoogleCloudDialogflowCxV3beta1ResponseMessageInput;
}
