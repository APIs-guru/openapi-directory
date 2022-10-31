package shared




type MultiClusterIngressFeatureSpecBillingEnum string

const (
    MultiClusterIngressFeatureSpecBillingEnumBillingUnspecified MultiClusterIngressFeatureSpecBillingEnum = "BILLING_UNSPECIFIED"
MultiClusterIngressFeatureSpecBillingEnumPayAsYouGo MultiClusterIngressFeatureSpecBillingEnum = "PAY_AS_YOU_GO"
MultiClusterIngressFeatureSpecBillingEnumAnthosLicense MultiClusterIngressFeatureSpecBillingEnum = "ANTHOS_LICENSE"
)


type MultiClusterIngressFeatureSpec struct {
    Billing *MultiClusterIngressFeatureSpecBillingEnum `json:"billing,omitempty"`
    ConfigMembership *string `json:"configMembership,omitempty"`
    
}

