package shared

type OrganizationLifecycleStateEnum string

const (
	OrganizationLifecycleStateEnumLifecycleStateUnspecified OrganizationLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	OrganizationLifecycleStateEnumActive                    OrganizationLifecycleStateEnum = "ACTIVE"
	OrganizationLifecycleStateEnumDeleteRequested           OrganizationLifecycleStateEnum = "DELETE_REQUESTED"
)

type Organization struct {
	CreationTime   *string                         `json:"creationTime"`
	DisplayName    *string                         `json:"displayName"`
	LifecycleState *OrganizationLifecycleStateEnum `json:"lifecycleState"`
	Name           *string                         `json:"name"`
	OrganizationID *string                         `json:"organizationId"`
	Owner          *OrganizationOwner              `json:"owner"`
}
