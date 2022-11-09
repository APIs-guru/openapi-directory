import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MultiClusterIngressFeatureSpec
/** 
 * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
**/
export class MultiClusterIngressFeatureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=configMembership" })
  configMembership?: string;
}
