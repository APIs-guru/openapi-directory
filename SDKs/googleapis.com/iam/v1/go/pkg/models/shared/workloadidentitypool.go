package shared

type WorkloadIdentityPoolStateEnum string

const (
	WorkloadIdentityPoolStateEnumStateUnspecified WorkloadIdentityPoolStateEnum = "STATE_UNSPECIFIED"
	WorkloadIdentityPoolStateEnumActive           WorkloadIdentityPoolStateEnum = "ACTIVE"
	WorkloadIdentityPoolStateEnumDeleted          WorkloadIdentityPoolStateEnum = "DELETED"
)

type WorkloadIdentityPool struct {
	Description *string                        `json:"description"`
	Disabled    *bool                          `json:"disabled"`
	DisplayName *string                        `json:"displayName"`
	Name        *string                        `json:"name"`
	State       *WorkloadIdentityPoolStateEnum `json:"state"`
}
