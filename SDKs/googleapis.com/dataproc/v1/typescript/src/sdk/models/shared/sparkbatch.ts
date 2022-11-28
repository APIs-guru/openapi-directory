import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SparkBatch
/** 
 * A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.
**/
export class SparkBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=mainClass" })
  mainClass?: string;

  @SpeakeasyMetadata({ data: "json, name=mainJarFileUri" })
  mainJarFileUri?: string;
}
