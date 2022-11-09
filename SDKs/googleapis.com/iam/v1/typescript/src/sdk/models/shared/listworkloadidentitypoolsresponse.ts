import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkloadIdentityPool } from "./workloadidentitypool";


// ListWorkloadIdentityPoolsResponse
/** 
 * Response message for ListWorkloadIdentityPools.
**/
export class ListWorkloadIdentityPoolsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=workloadIdentityPools", elemType: shared.WorkloadIdentityPool })
  workloadIdentityPools?: WorkloadIdentityPool[];
}
