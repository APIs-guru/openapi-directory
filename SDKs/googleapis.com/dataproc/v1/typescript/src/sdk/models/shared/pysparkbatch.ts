import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PySparkBatch
/** 
 * A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload.
**/
export class PySparkBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=mainPythonFileUri" })
  mainPythonFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=pythonFileUris" })
  pythonFileUris?: string[];
}
