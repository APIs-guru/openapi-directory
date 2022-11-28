import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SparkHistoryServerConfig } from "./sparkhistoryserverconfig";



// PeripheralsConfig
/** 
 * Auxiliary services configuration for a workload.
**/
export class PeripheralsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metastoreService" })
  metastoreService?: string;

  @SpeakeasyMetadata({ data: "json, name=sparkHistoryServerConfig" })
  sparkHistoryServerConfig?: SparkHistoryServerConfig;
}
