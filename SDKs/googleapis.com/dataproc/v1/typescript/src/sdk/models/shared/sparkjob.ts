import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfig } from "./loggingconfig";


// SparkJob
/** 
 * A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN.
**/
export class SparkJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @Metadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=mainClass" })
  mainClass?: string;

  @Metadata({ data: "json, name=mainJarFileUri" })
  mainJarFileUri?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}
