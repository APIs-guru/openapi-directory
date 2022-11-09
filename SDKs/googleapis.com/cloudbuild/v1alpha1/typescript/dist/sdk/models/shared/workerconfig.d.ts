import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Network } from "./network";
/**
 * WorkerConfig defines the configuration to be used for a creating workers in the pool.
**/
export declare class WorkerConfig extends SpeakeasyBase {
    diskSizeGb?: string;
    machineType?: string;
    network?: Network;
    tag?: string;
}
