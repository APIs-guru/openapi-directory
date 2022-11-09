import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpec } from "./googleclouddataplexv1taskinfrastructurespec";


// GoogleCloudDataplexV1TaskSparkTaskConfig
/** 
 * User-specified config for running a Spark task.
**/
export class GoogleCloudDataplexV1TaskSparkTaskConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @Metadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @Metadata({ data: "json, name=infrastructureSpec" })
  infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;

  @Metadata({ data: "json, name=mainClass" })
  mainClass?: string;

  @Metadata({ data: "json, name=mainJarFileUri" })
  mainJarFileUri?: string;

  @Metadata({ data: "json, name=pythonScriptFile" })
  pythonScriptFile?: string;

  @Metadata({ data: "json, name=sqlScript" })
  sqlScript?: string;

  @Metadata({ data: "json, name=sqlScriptFile" })
  sqlScriptFile?: string;
}
