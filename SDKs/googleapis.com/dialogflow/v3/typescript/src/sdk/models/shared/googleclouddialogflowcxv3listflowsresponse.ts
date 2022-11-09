import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Flow } from "./googleclouddialogflowcxv3flow";


// GoogleCloudDialogflowCxV3ListFlowsResponse
/** 
 * The response message for Flows.ListFlows.
**/
export class GoogleCloudDialogflowCxV3ListFlowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=flows", elemType: shared.GoogleCloudDialogflowCxV3Flow })
  flows?: GoogleCloudDialogflowCxV3Flow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
