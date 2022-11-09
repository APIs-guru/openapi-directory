import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources } from "./googleclouddataplexv1environmentinfrastructurespeccomputeresources";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime } from "./googleclouddataplexv1environmentinfrastructurespecosimageruntime";


// GoogleCloudDataplexV1EnvironmentInfrastructureSpec
/** 
 * Configuration for the underlying infrastructure used to run workloads.
**/
export class GoogleCloudDataplexV1EnvironmentInfrastructureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=compute" })
  compute?: GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources;

  @Metadata({ data: "json, name=osImage" })
  osImage?: GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime;
}
