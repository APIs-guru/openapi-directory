import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MultiClusterIngressFeatureSpecBillingEnum {
    BillingUnspecified = "BILLING_UNSPECIFIED",
    PayAsYouGo = "PAY_AS_YOU_GO",
    AnthosLicense = "ANTHOS_LICENSE"
}
/**
 * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
**/
export declare class MultiClusterIngressFeatureSpec extends SpeakeasyBase {
    billing?: MultiClusterIngressFeatureSpecBillingEnum;
    configMembership?: string;
}
