import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ValidationMessage } from "./googleclouddialogflowcxv3validationmessage";



// GoogleCloudDialogflowCxV3FlowValidationResult
/** 
 * The response message for Flows.GetFlowValidationResult.
**/
export class GoogleCloudDialogflowCxV3FlowValidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=validationMessages", elemType: GoogleCloudDialogflowCxV3ValidationMessage })
  validationMessages?: GoogleCloudDialogflowCxV3ValidationMessage[];
}
