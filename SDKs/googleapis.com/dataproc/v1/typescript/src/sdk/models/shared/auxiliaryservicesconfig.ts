import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetastoreConfig } from "./metastoreconfig";
import { SparkHistoryServerConfig } from "./sparkhistoryserverconfig";



// AuxiliaryServicesConfig
/** 
 * Auxiliary services configuration for a Cluster.
**/
export class AuxiliaryServicesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metastoreConfig" })
  metastoreConfig?: MetastoreConfig;

  @SpeakeasyMetadata({ data: "json, name=sparkHistoryServerConfig" })
  sparkHistoryServerConfig?: SparkHistoryServerConfig;
}
