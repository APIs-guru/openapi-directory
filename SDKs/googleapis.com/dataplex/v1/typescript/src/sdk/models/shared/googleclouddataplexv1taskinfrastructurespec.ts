import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources } from "./googleclouddataplexv1taskinfrastructurespecbatchcomputeresources";
import { GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime } from "./googleclouddataplexv1taskinfrastructurespeccontainerimageruntime";
import { GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork } from "./googleclouddataplexv1taskinfrastructurespecvpcnetwork";


// GoogleCloudDataplexV1TaskInfrastructureSpec
/** 
 * Configuration for the underlying infrastructure used to run workloads.
**/
export class GoogleCloudDataplexV1TaskInfrastructureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=batch" })
  batch?: GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources;

  @Metadata({ data: "json, name=containerImage" })
  containerImage?: GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime;

  @Metadata({ data: "json, name=vpcNetwork" })
  vpcNetwork?: GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork;
}
