import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SparkBatch
/** 
 * A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.
**/
export class SparkBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @Metadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @Metadata({ data: "json, name=mainClass" })
  mainClass?: string;

  @Metadata({ data: "json, name=mainJarFileUri" })
  mainJarFileUri?: string;
}
