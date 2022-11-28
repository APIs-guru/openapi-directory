import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";



// DeploymentsListResponse
/** 
 * A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
**/
export class DeploymentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: Deployment })
  deployments?: Deployment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
