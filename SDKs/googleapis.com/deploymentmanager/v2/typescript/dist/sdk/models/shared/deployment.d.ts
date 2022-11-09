import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentLabelEntry } from "./deploymentlabelentry";
import { Operation } from "./operation";
import { TargetConfiguration } from "./targetconfiguration";
import { DeploymentUpdate } from "./deploymentupdate";
export declare class Deployment extends SpeakeasyBase {
    description?: string;
    fingerprint?: string;
    id?: string;
    insertTime?: string;
    labels?: DeploymentLabelEntry[];
    manifest?: string;
    name?: string;
    operation?: Operation;
    selfLink?: string;
    target?: TargetConfiguration;
    update?: DeploymentUpdate;
    updateTime?: string;
}
