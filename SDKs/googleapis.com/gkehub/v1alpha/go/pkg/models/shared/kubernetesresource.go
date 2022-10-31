package shared



type KubernetesResource struct {
    ConnectResources []ResourceManifest `json:"connectResources,omitempty"`
    MembershipCrManifest *string `json:"membershipCrManifest,omitempty"`
    MembershipResources []ResourceManifest `json:"membershipResources,omitempty"`
    ResourceOptions *ResourceOptions `json:"resourceOptions,omitempty"`
    
}

