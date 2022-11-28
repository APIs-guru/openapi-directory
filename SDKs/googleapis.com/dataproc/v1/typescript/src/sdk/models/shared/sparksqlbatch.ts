import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SparkSqlBatch
/** 
 * A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.
**/
export class SparkSqlBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=queryFileUri" })
  queryFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=queryVariables" })
  queryVariables?: Map<string, string>;
}
