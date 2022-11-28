import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the configuration to be used for creating workers in the pool.
**/
export declare class WorkerConfig extends SpeakeasyBase {
    diskSizeGb?: string;
    machineType?: string;
    noExternalIp?: boolean;
}
