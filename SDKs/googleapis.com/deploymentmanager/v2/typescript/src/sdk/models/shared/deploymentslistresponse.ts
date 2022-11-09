import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Deployment } from "./deployment";


// DeploymentsListResponse
/** 
 * A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
**/
export class DeploymentsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments", elemType: shared.Deployment })
  deployments?: Deployment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
