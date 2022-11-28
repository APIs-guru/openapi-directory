import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources } from "./googleclouddataplexv1taskinfrastructurespecbatchcomputeresources";
import { GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime } from "./googleclouddataplexv1taskinfrastructurespeccontainerimageruntime";
import { GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork } from "./googleclouddataplexv1taskinfrastructurespecvpcnetwork";
/**
 * Configuration for the underlying infrastructure used to run workloads.
**/
export declare class GoogleCloudDataplexV1TaskInfrastructureSpec extends SpeakeasyBase {
    batch?: GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources;
    containerImage?: GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime;
    vpcNetwork?: GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork;
}
