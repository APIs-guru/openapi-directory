import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3ExportFlowRequest
/** 
 * The request message for Flows.ExportFlow.
**/
export class GoogleCloudDialogflowCxV3ExportFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flowUri" })
  flowUri?: string;

  @SpeakeasyMetadata({ data: "json, name=includeReferencedFlows" })
  includeReferencedFlows?: boolean;
}
