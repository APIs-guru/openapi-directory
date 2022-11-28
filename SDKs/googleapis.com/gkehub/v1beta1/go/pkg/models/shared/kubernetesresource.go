package shared

// KubernetesResourceInput
// KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
type KubernetesResourceInput struct {
	MembershipCrManifest *string          `json:"membershipCrManifest,omitempty"`
	ResourceOptions      *ResourceOptions `json:"resourceOptions,omitempty"`
}

// KubernetesResource
// KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
type KubernetesResource struct {
	ConnectResources     []ResourceManifest `json:"connectResources,omitempty"`
	MembershipCrManifest *string            `json:"membershipCrManifest,omitempty"`
	MembershipResources  []ResourceManifest `json:"membershipResources,omitempty"`
	ResourceOptions      *ResourceOptions   `json:"resourceOptions,omitempty"`
}
