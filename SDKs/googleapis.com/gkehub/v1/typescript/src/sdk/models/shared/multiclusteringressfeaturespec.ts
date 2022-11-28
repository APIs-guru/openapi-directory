import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MultiClusterIngressFeatureSpec
/** 
 * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
**/
export class MultiClusterIngressFeatureSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configMembership" })
  configMembership?: string;
}
