import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";


// SparkSqlJob
/** 
 * A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries.
**/
export class SparkSqlJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=queryFileUri" })
  queryFileUri?: string;

  @Metadata({ data: "json, name=queryList" })
  queryList?: QueryList;

  @Metadata({ data: "json, name=scriptVariables" })
  scriptVariables?: Map<string, string>;
}
