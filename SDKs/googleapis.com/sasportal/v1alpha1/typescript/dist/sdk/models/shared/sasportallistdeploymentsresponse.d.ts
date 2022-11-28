import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDeployment } from "./sasportaldeployment";
/**
 * Response for ListDeployments.
**/
export declare class SasPortalListDeploymentsResponse extends SpeakeasyBase {
    deployments?: SasPortalDeployment[];
    nextPageToken?: string;
}
