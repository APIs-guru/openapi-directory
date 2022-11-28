import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SparkHistoryServerConfig
/** 
 * Spark History Server configuration for the workload.
**/
export class SparkHistoryServerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataprocCluster" })
  dataprocCluster?: string;
}
