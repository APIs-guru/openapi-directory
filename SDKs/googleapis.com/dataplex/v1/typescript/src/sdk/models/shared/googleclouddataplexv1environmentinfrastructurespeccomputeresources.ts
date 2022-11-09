import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources
/** 
 * Compute resources associated with the analyze interactive workloads.
**/
export class GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @Metadata({ data: "json, name=maxNodeCount" })
  maxNodeCount?: number;

  @Metadata({ data: "json, name=nodeCount" })
  nodeCount?: number;
}
