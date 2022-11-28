import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";



// PySparkJob
/** 
 * A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.
**/
export class PySparkJob extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=mainPythonFileUri" })
  mainPythonFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pythonFileUris" })
  pythonFileUris?: string[];
}
