import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescasecasecontent";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescasecasecontent";



// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput
/** 
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseContent", elemType: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput })
  caseContent?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput[];

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;
}


// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase
/** 
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseContent", elemType: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent })
  caseContent?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent[];

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;
}
