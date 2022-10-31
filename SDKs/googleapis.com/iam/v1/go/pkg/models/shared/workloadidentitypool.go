package shared

type WorkloadIdentityPoolStateEnum string

const (
	WorkloadIdentityPoolStateEnumStateUnspecified WorkloadIdentityPoolStateEnum = "STATE_UNSPECIFIED"
	WorkloadIdentityPoolStateEnumActive           WorkloadIdentityPoolStateEnum = "ACTIVE"
	WorkloadIdentityPoolStateEnumDeleted          WorkloadIdentityPoolStateEnum = "DELETED"
)

type WorkloadIdentityPool struct {
	Description *string                        `json:"description,omitempty"`
	Disabled    *bool                          `json:"disabled,omitempty"`
	DisplayName *string                        `json:"displayName,omitempty"`
	Name        *string                        `json:"name,omitempty"`
	State       *WorkloadIdentityPoolStateEnum `json:"state,omitempty"`
}
