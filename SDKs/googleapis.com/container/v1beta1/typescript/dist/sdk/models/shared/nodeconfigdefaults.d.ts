import { SpeakeasyBase } from "../../../internal/utils";
import { GcfsConfig } from "./gcfsconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
/**
 * Subset of NodeConfig message that has defaults.
**/
export declare class NodeConfigDefaults extends SpeakeasyBase {
    gcfsConfig?: GcfsConfig;
    loggingConfig?: NodePoolLoggingConfig;
}
