import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetastoreConfig } from "./metastoreconfig";
import { SparkHistoryServerConfig } from "./sparkhistoryserverconfig";


// AuxiliaryServicesConfig
/** 
 * Auxiliary services configuration for a Cluster.
**/
export class AuxiliaryServicesConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=metastoreConfig" })
  metastoreConfig?: MetastoreConfig;

  @Metadata({ data: "json, name=sparkHistoryServerConfig" })
  sparkHistoryServerConfig?: SparkHistoryServerConfig;
}
