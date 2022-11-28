package shared

type OrganizationLifecycleStateEnum string

const (
	OrganizationLifecycleStateEnumLifecycleStateUnspecified OrganizationLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	OrganizationLifecycleStateEnumActive                    OrganizationLifecycleStateEnum = "ACTIVE"
	OrganizationLifecycleStateEnumDeleteRequested           OrganizationLifecycleStateEnum = "DELETE_REQUESTED"
)

// Organization
// The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong.
type Organization struct {
	CreationTime   *string                         `json:"creationTime,omitempty"`
	DisplayName    *string                         `json:"displayName,omitempty"`
	LifecycleState *OrganizationLifecycleStateEnum `json:"lifecycleState,omitempty"`
	Name           *string                         `json:"name,omitempty"`
	Owner          *OrganizationOwner              `json:"owner,omitempty"`
}
