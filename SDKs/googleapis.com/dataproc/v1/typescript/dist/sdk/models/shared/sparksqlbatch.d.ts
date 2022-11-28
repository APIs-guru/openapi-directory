import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.
**/
export declare class SparkSqlBatch extends SpeakeasyBase {
    jarFileUris?: string[];
    queryFileUri?: string;
    queryVariables?: Map<string, string>;
}
