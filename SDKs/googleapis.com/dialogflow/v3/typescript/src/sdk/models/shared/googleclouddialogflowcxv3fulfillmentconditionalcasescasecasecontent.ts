import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCases } from "./googleclouddialogflowcxv3fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3ResponseMessage } from "./googleclouddialogflowcxv3responsemessage";
import { GoogleCloudDialogflowCxV3ResponseMessageInput } from "./googleclouddialogflowcxv3responsemessage";



// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent
/** 
 * The list of messages or conditional cases to activate for this case.
**/
export class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalCases" })
  additionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCases;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: GoogleCloudDialogflowCxV3ResponseMessage;
}


// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput
/** 
 * The list of messages or conditional cases to activate for this case.
**/
export class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalCases" })
  additionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCases;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: GoogleCloudDialogflowCxV3ResponseMessageInput;
}
