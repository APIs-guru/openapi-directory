import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PySparkBatch
/** 
 * A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload.
**/
export class PySparkBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @Metadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @Metadata({ data: "json, name=mainPythonFileUri" })
  mainPythonFileUri?: string;

  @Metadata({ data: "json, name=pythonFileUris" })
  pythonFileUris?: string[];
}
