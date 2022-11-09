import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime
/** 
 * Container Image Runtime Configuration used with Batch execution.
**/
export class GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=javaJars" })
  javaJars?: string[];

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=pythonPackages" })
  pythonPackages?: string[];
}
