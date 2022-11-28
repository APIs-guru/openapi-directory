package shared

type WorkloadIdentityPoolStateEnum string

const (
	WorkloadIdentityPoolStateEnumStateUnspecified WorkloadIdentityPoolStateEnum = "STATE_UNSPECIFIED"
	WorkloadIdentityPoolStateEnumActive           WorkloadIdentityPoolStateEnum = "ACTIVE"
	WorkloadIdentityPoolStateEnumDeleted          WorkloadIdentityPoolStateEnum = "DELETED"
)

// WorkloadIdentityPool
// Represents a collection of external workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.
type WorkloadIdentityPool struct {
	Description *string                        `json:"description,omitempty"`
	Disabled    *bool                          `json:"disabled,omitempty"`
	DisplayName *string                        `json:"displayName,omitempty"`
	Name        *string                        `json:"name,omitempty"`
	State       *WorkloadIdentityPoolStateEnum `json:"state,omitempty"`
}

// WorkloadIdentityPoolInput
// Represents a collection of external workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.
type WorkloadIdentityPoolInput struct {
	Description *string `json:"description,omitempty"`
	Disabled    *bool   `json:"disabled,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
}
