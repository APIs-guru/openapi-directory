import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentUpdateLabelEntry } from "./deploymentupdatelabelentry";
export declare class DeploymentUpdate extends SpeakeasyBase {
    description?: string;
    labels?: DeploymentUpdateLabelEntry[];
    manifest?: string;
}
