import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentUpdateLabelEntry } from "./deploymentupdatelabelentry";
export declare class DeploymentUpdate extends SpeakeasyBase {
    description?: string;
    labels?: DeploymentUpdateLabelEntry[];
    manifest?: string;
}
