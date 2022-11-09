import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1ValidationMessage } from "./googleclouddialogflowcxv3beta1validationmessage";


// GoogleCloudDialogflowCxV3beta1FlowValidationResult
/** 
 * The response message for Flows.GetFlowValidationResult.
**/
export class GoogleCloudDialogflowCxV3beta1FlowValidationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=validationMessages", elemType: shared.GoogleCloudDialogflowCxV3beta1ValidationMessage })
  validationMessages?: GoogleCloudDialogflowCxV3beta1ValidationMessage[];
}
