import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SparkHistoryServerConfig
/** 
 * Spark History Server configuration for the workload.
**/
export class SparkHistoryServerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataprocCluster" })
  dataprocCluster?: string;
}
