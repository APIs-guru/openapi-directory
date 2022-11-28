import { SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";
/**
 * A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
**/
export declare class DeploymentsListResponse extends SpeakeasyBase {
    deployments?: Deployment[];
    nextPageToken?: string;
}
