import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1BuiltInAlgorithmOutput
/** 
 * Represents output related to a built-in algorithm Job.
**/
export class GoogleCloudMlV1BuiltInAlgorithmOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=framework" })
  framework?: string;

  @Metadata({ data: "json, name=modelPath" })
  modelPath?: string;

  @Metadata({ data: "json, name=pythonVersion" })
  pythonVersion?: string;

  @Metadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;
}
