import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources } from "./googleclouddataplexv1taskinfrastructurespecbatchcomputeresources";
import { GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime } from "./googleclouddataplexv1taskinfrastructurespeccontainerimageruntime";
import { GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork } from "./googleclouddataplexv1taskinfrastructurespecvpcnetwork";



// GoogleCloudDataplexV1TaskInfrastructureSpec
/** 
 * Configuration for the underlying infrastructure used to run workloads.
**/
export class GoogleCloudDataplexV1TaskInfrastructureSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batch" })
  batch?: GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources;

  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime;

  @SpeakeasyMetadata({ data: "json, name=vpcNetwork" })
  vpcNetwork?: GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork;
}
