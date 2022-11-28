import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";



// SparkSqlJob
/** 
 * A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries.
**/
export class SparkSqlJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=queryFileUri" })
  queryFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=queryList" })
  queryList?: QueryList;

  @SpeakeasyMetadata({ data: "json, name=scriptVariables" })
  scriptVariables?: Map<string, string>;
}
