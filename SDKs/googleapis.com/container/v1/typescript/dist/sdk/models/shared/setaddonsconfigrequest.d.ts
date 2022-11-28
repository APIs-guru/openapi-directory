import { SpeakeasyBase } from "../../../internal/utils";
import { AddonsConfig } from "./addonsconfig";
/**
 * SetAddonsConfigRequest sets the addons associated with the cluster.
**/
export declare class SetAddonsConfigRequest extends SpeakeasyBase {
    addonsConfig?: AddonsConfig;
    clusterId?: string;
    name?: string;
    projectId?: string;
    zone?: string;
}
