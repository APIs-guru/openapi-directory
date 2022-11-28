import { SpeakeasyBase } from "../../../internal/utils";
import { Credential } from "./credential";
import { DeploymentUpdateLabelEntry } from "./deploymentupdatelabelentry";
export declare class DeploymentUpdate extends SpeakeasyBase {
    credential?: Credential;
    description?: string;
    labels?: DeploymentUpdateLabelEntry[];
    manifest?: string;
}
