import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkloadIdentityPool } from "./workloadidentitypool";
/**
 * Response message for ListWorkloadIdentityPools.
**/
export declare class ListWorkloadIdentityPoolsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    workloadIdentityPools?: WorkloadIdentityPool[];
}
