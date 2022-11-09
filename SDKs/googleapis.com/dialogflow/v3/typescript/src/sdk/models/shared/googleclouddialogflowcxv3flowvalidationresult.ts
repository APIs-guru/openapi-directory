import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3ValidationMessage } from "./googleclouddialogflowcxv3validationmessage";


// GoogleCloudDialogflowCxV3FlowValidationResult
/** 
 * The response message for Flows.GetFlowValidationResult.
**/
export class GoogleCloudDialogflowCxV3FlowValidationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=validationMessages", elemType: shared.GoogleCloudDialogflowCxV3ValidationMessage })
  validationMessages?: GoogleCloudDialogflowCxV3ValidationMessage[];
}
