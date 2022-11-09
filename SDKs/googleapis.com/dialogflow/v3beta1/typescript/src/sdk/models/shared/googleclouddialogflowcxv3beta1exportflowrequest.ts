import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1ExportFlowRequest
/** 
 * The request message for Flows.ExportFlow.
**/
export class GoogleCloudDialogflowCxV3beta1ExportFlowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=flowUri" })
  flowUri?: string;

  @Metadata({ data: "json, name=includeReferencedFlows" })
  includeReferencedFlows?: boolean;
}
