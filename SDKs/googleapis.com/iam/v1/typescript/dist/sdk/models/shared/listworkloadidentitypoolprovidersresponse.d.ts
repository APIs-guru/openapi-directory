import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkloadIdentityPoolProvider } from "./workloadidentitypoolprovider";
/**
 * Response message for ListWorkloadIdentityPoolProviders.
**/
export declare class ListWorkloadIdentityPoolProvidersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    workloadIdentityPoolProviders?: WorkloadIdentityPoolProvider[];
}
