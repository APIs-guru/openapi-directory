import { SpeakeasyBase } from "../../../internal/utils";
import { PatchDeployment } from "./patchdeployment";
/**
 * A response message for listing patch deployments.
**/
export declare class ListPatchDeploymentsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    patchDeployments?: PatchDeployment[];
}
