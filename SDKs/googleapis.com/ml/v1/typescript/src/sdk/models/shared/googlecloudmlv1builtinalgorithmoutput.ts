import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1BuiltInAlgorithmOutput
/** 
 * Represents output related to a built-in algorithm Job.
**/
export class GoogleCloudMlV1BuiltInAlgorithmOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=framework" })
  framework?: string;

  @SpeakeasyMetadata({ data: "json, name=modelPath" })
  modelPath?: string;

  @SpeakeasyMetadata({ data: "json, name=pythonVersion" })
  pythonVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;
}
