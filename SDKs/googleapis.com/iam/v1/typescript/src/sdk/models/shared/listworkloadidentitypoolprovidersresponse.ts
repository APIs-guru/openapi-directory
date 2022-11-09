import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkloadIdentityPoolProvider } from "./workloadidentitypoolprovider";


// ListWorkloadIdentityPoolProvidersResponse
/** 
 * Response message for ListWorkloadIdentityPoolProviders.
**/
export class ListWorkloadIdentityPoolProvidersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=workloadIdentityPoolProviders", elemType: shared.WorkloadIdentityPoolProvider })
  workloadIdentityPoolProviders?: WorkloadIdentityPoolProvider[];
}
