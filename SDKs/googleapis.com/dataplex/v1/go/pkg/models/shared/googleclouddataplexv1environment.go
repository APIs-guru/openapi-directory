package shared

type GoogleCloudDataplexV1EnvironmentStateEnum string

const (
	GoogleCloudDataplexV1EnvironmentStateEnumStateUnspecified GoogleCloudDataplexV1EnvironmentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1EnvironmentStateEnumActive           GoogleCloudDataplexV1EnvironmentStateEnum = "ACTIVE"
	GoogleCloudDataplexV1EnvironmentStateEnumCreating         GoogleCloudDataplexV1EnvironmentStateEnum = "CREATING"
	GoogleCloudDataplexV1EnvironmentStateEnumDeleting         GoogleCloudDataplexV1EnvironmentStateEnum = "DELETING"
	GoogleCloudDataplexV1EnvironmentStateEnumActionRequired   GoogleCloudDataplexV1EnvironmentStateEnum = "ACTION_REQUIRED"
)

type GoogleCloudDataplexV1Environment struct {
	CreateTime         *string                                             `json:"createTime"`
	Description        *string                                             `json:"description"`
	DisplayName        *string                                             `json:"displayName"`
	Endpoints          *GoogleCloudDataplexV1EnvironmentEndpoints          `json:"endpoints"`
	InfrastructureSpec *GoogleCloudDataplexV1EnvironmentInfrastructureSpec `json:"infrastructureSpec"`
	Labels             map[string]string                                   `json:"labels"`
	Name               *string                                             `json:"name"`
	SessionSpec        *GoogleCloudDataplexV1EnvironmentSessionSpec        `json:"sessionSpec"`
	SessionStatus      *GoogleCloudDataplexV1EnvironmentSessionStatus      `json:"sessionStatus"`
	State              *GoogleCloudDataplexV1EnvironmentStateEnum          `json:"state"`
	UID                *string                                             `json:"uid"`
	UpdateTime         *string                                             `json:"updateTime"`
}
