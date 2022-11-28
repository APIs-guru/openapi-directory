import { SpeakeasyBase } from "../../../internal/utils";
import { Credential } from "./credential";
import { DeploymentLabelEntry } from "./deploymentlabelentry";
import { Operation } from "./operation";
import { DeploymentOutputEntry } from "./deploymentoutputentry";
import { TargetConfiguration } from "./targetconfiguration";
import { DeploymentUpdate } from "./deploymentupdate";
export declare class Deployment extends SpeakeasyBase {
    credential?: Credential;
    description?: string;
    fingerprint?: string;
    id?: string;
    insertTime?: string;
    labels?: DeploymentLabelEntry[];
    manifest?: string;
    name?: string;
    operation?: Operation;
    outputs?: DeploymentOutputEntry[];
    selfLink?: string;
    target?: TargetConfiguration;
    update?: DeploymentUpdate;
    updateTime?: string;
}
