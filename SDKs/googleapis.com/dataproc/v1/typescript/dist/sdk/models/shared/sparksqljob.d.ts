import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";
/**
 * A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries.
**/
export declare class SparkSqlJob extends SpeakeasyBase {
    jarFileUris?: string[];
    loggingConfig?: LoggingConfig;
    properties?: Map<string, string>;
    queryFileUri?: string;
    queryList?: QueryList;
    scriptVariables?: Map<string, string>;
}
