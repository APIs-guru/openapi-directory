import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkloadIdentityPool } from "./workloadidentitypool";



// ListWorkloadIdentityPoolsResponse
/** 
 * Response message for ListWorkloadIdentityPools.
**/
export class ListWorkloadIdentityPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=workloadIdentityPools", elemType: WorkloadIdentityPool })
  workloadIdentityPools?: WorkloadIdentityPool[];
}
