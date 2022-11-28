import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";



// SparkJob
/** 
 * A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN.
**/
export class SparkJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=mainClass" })
  mainClass?: string;

  @SpeakeasyMetadata({ data: "json, name=mainJarFileUri" })
  mainJarFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}
