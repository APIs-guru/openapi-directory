import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1ExportFlowRequest
/** 
 * The request message for Flows.ExportFlow.
**/
export class GoogleCloudDialogflowCxV3beta1ExportFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flowUri" })
  flowUri?: string;

  @SpeakeasyMetadata({ data: "json, name=includeReferencedFlows" })
  includeReferencedFlows?: boolean;
}
