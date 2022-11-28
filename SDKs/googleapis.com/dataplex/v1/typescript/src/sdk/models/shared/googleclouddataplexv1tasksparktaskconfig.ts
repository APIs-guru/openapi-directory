import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpec } from "./googleclouddataplexv1taskinfrastructurespec";



// GoogleCloudDataplexV1TaskSparkTaskConfig
/** 
 * User-specified config for running a Spark task.
**/
export class GoogleCloudDataplexV1TaskSparkTaskConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=infrastructureSpec" })
  infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;

  @SpeakeasyMetadata({ data: "json, name=mainClass" })
  mainClass?: string;

  @SpeakeasyMetadata({ data: "json, name=mainJarFileUri" })
  mainJarFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=pythonScriptFile" })
  pythonScriptFile?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlScript" })
  sqlScript?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlScriptFile" })
  sqlScriptFile?: string;
}
