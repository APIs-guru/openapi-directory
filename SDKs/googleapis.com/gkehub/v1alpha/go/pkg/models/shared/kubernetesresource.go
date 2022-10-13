package shared

type KubernetesResource struct {
	ConnectResources     []ResourceManifest `json:"connectResources"`
	MembershipCrManifest *string            `json:"membershipCrManifest"`
	MembershipResources  []ResourceManifest `json:"membershipResources"`
	ResourceOptions      *ResourceOptions   `json:"resourceOptions"`
}
