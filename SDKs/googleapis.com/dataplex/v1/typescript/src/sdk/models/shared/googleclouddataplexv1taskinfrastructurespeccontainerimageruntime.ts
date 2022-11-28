import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime
/** 
 * Container Image Runtime Configuration used with Batch execution.
**/
export class GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=javaJars" })
  javaJars?: string[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pythonPackages" })
  pythonPackages?: string[];
}
