import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SparkSqlBatch
/** 
 * A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.
**/
export class SparkSqlBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @Metadata({ data: "json, name=queryFileUri" })
  queryFileUri?: string;

  @Metadata({ data: "json, name=queryVariables" })
  queryVariables?: Map<string, string>;
}
