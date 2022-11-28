import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources
/** 
 * Compute resources associated with the analyze interactive workloads.
**/
export class GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=maxNodeCount" })
  maxNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: number;
}
