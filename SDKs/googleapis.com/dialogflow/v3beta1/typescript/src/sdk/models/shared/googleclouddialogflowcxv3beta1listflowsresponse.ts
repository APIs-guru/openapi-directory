import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Flow } from "./googleclouddialogflowcxv3beta1flow";


// GoogleCloudDialogflowCxV3beta1ListFlowsResponse
/** 
 * The response message for Flows.ListFlows.
**/
export class GoogleCloudDialogflowCxV3beta1ListFlowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=flows", elemType: shared.GoogleCloudDialogflowCxV3beta1Flow })
  flows?: GoogleCloudDialogflowCxV3beta1Flow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
