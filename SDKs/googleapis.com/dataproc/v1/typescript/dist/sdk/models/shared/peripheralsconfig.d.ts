import { SpeakeasyBase } from "../../../internal/utils";
import { SparkHistoryServerConfig } from "./sparkhistoryserverconfig";
/**
 * Auxiliary services configuration for a workload.
**/
export declare class PeripheralsConfig extends SpeakeasyBase {
    metastoreService?: string;
    sparkHistoryServerConfig?: SparkHistoryServerConfig;
}
