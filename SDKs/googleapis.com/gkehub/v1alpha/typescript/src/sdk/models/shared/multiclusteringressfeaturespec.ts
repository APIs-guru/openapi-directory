import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MultiClusterIngressFeatureSpecBillingEnum {
    BillingUnspecified = "BILLING_UNSPECIFIED"
,    PayAsYouGo = "PAY_AS_YOU_GO"
,    AnthosLicense = "ANTHOS_LICENSE"
}


// MultiClusterIngressFeatureSpec
/** 
 * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
**/
export class MultiClusterIngressFeatureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=billing" })
  billing?: MultiClusterIngressFeatureSpecBillingEnum;

  @Metadata({ data: "json, name=configMembership" })
  configMembership?: string;
}
