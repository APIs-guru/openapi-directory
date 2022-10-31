package shared




type GoogleCloudDataplexV1EnvironmentStateEnum string

const (
    GoogleCloudDataplexV1EnvironmentStateEnumStateUnspecified GoogleCloudDataplexV1EnvironmentStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDataplexV1EnvironmentStateEnumActive GoogleCloudDataplexV1EnvironmentStateEnum = "ACTIVE"
GoogleCloudDataplexV1EnvironmentStateEnumCreating GoogleCloudDataplexV1EnvironmentStateEnum = "CREATING"
GoogleCloudDataplexV1EnvironmentStateEnumDeleting GoogleCloudDataplexV1EnvironmentStateEnum = "DELETING"
GoogleCloudDataplexV1EnvironmentStateEnumActionRequired GoogleCloudDataplexV1EnvironmentStateEnum = "ACTION_REQUIRED"
)


type GoogleCloudDataplexV1Environment struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Endpoints *GoogleCloudDataplexV1EnvironmentEndpoints `json:"endpoints,omitempty"`
    InfrastructureSpec *GoogleCloudDataplexV1EnvironmentInfrastructureSpec `json:"infrastructureSpec,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    SessionSpec *GoogleCloudDataplexV1EnvironmentSessionSpec `json:"sessionSpec,omitempty"`
    SessionStatus *GoogleCloudDataplexV1EnvironmentSessionStatus `json:"sessionStatus,omitempty"`
    State *GoogleCloudDataplexV1EnvironmentStateEnum `json:"state,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

