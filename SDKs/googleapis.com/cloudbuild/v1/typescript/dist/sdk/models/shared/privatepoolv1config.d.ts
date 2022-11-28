import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfig } from "./networkconfig";
import { WorkerConfig } from "./workerconfig";
/**
 * Configuration for a V1 `PrivatePool`.
**/
export declare class PrivatePoolV1Config extends SpeakeasyBase {
    networkConfig?: NetworkConfig;
    workerConfig?: WorkerConfig;
}
