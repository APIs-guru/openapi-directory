import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Deployment } from "./deployment";


// ListDeploymentsResponse
/** 
 * Response with the list of deployments for the specified Apps Script project.
**/
export class ListDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments", elemType: shared.Deployment })
  deployments?: Deployment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
