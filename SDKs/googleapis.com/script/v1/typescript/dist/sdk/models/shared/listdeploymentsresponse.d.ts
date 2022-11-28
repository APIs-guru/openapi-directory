import { SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";
/**
 * Response with the list of deployments for the specified Apps Script project.
**/
export declare class ListDeploymentsResponse extends SpeakeasyBase {
    deployments?: Deployment[];
    nextPageToken?: string;
}
