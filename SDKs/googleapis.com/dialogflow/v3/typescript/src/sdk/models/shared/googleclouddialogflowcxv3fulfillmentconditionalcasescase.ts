import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescasecasecontent";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescasecasecontent";



// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase
/** 
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
export class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseContent", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent })
  caseContent?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent[];

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;
}


// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput
/** 
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
export class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseContent", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput })
  caseContent?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput[];

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;
}
