import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentConfig } from "./deploymentconfig";
import { EntryPoint } from "./entrypoint";
/**
 * Representation of a single script deployment.
**/
export declare class Deployment extends SpeakeasyBase {
    deploymentConfig?: DeploymentConfig;
    deploymentId?: string;
    entryPoints?: EntryPoint[];
    updateTime?: string;
}
