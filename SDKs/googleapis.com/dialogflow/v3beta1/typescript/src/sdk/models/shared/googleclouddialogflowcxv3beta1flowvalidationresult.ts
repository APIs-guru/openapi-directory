import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ValidationMessage } from "./googleclouddialogflowcxv3beta1validationmessage";



// GoogleCloudDialogflowCxV3beta1FlowValidationResult
/** 
 * The response message for Flows.GetFlowValidationResult.
**/
export class GoogleCloudDialogflowCxV3beta1FlowValidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=validationMessages", elemType: GoogleCloudDialogflowCxV3beta1ValidationMessage })
  validationMessages?: GoogleCloudDialogflowCxV3beta1ValidationMessage[];
}
