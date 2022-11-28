import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources } from "./googleclouddataplexv1environmentinfrastructurespeccomputeresources";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime } from "./googleclouddataplexv1environmentinfrastructurespecosimageruntime";



// GoogleCloudDataplexV1EnvironmentInfrastructureSpec
/** 
 * Configuration for the underlying infrastructure used to run workloads.
**/
export class GoogleCloudDataplexV1EnvironmentInfrastructureSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compute" })
  compute?: GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources;

  @SpeakeasyMetadata({ data: "json, name=osImage" })
  osImage?: GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime;
}
