import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3ExportFlowRequest
/** 
 * The request message for Flows.ExportFlow.
**/
export class GoogleCloudDialogflowCxV3ExportFlowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=flowUri" })
  flowUri?: string;

  @Metadata({ data: "json, name=includeReferencedFlows" })
  includeReferencedFlows?: boolean;
}
