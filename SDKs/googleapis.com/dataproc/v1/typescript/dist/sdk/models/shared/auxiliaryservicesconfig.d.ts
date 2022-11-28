import { SpeakeasyBase } from "../../../internal/utils";
import { MetastoreConfig } from "./metastoreconfig";
import { SparkHistoryServerConfig } from "./sparkhistoryserverconfig";
/**
 * Auxiliary services configuration for a Cluster.
**/
export declare class AuxiliaryServicesConfig extends SpeakeasyBase {
    metastoreConfig?: MetastoreConfig;
    sparkHistoryServerConfig?: SparkHistoryServerConfig;
}
