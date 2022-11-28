import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkloadIdentityPoolProvider } from "./workloadidentitypoolprovider";



// ListWorkloadIdentityPoolProvidersResponse
/** 
 * Response message for ListWorkloadIdentityPoolProviders.
**/
export class ListWorkloadIdentityPoolProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=workloadIdentityPoolProviders", elemType: WorkloadIdentityPoolProvider })
  workloadIdentityPoolProviders?: WorkloadIdentityPoolProvider[];
}
