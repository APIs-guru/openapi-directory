import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Execution configuration for a workload.
**/
export declare class ExecutionConfig extends SpeakeasyBase {
    idleTtl?: string;
    kmsKey?: string;
    networkTags?: string[];
    networkUri?: string;
    serviceAccount?: string;
    subnetworkUri?: string;
}
