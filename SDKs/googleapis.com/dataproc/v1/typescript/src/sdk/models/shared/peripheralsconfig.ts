import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SparkHistoryServerConfig } from "./sparkhistoryserverconfig";


// PeripheralsConfig
/** 
 * Auxiliary services configuration for a workload.
**/
export class PeripheralsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=metastoreService" })
  metastoreService?: string;

  @Metadata({ data: "json, name=sparkHistoryServerConfig" })
  sparkHistoryServerConfig?: SparkHistoryServerConfig;
}
