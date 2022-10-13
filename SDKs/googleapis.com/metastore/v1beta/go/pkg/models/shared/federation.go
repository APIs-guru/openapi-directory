package shared

type FederationStateEnum string

const (
	FederationStateEnumStateUnspecified FederationStateEnum = "STATE_UNSPECIFIED"
	FederationStateEnumCreating         FederationStateEnum = "CREATING"
	FederationStateEnumActive           FederationStateEnum = "ACTIVE"
	FederationStateEnumUpdating         FederationStateEnum = "UPDATING"
	FederationStateEnumDeleting         FederationStateEnum = "DELETING"
	FederationStateEnumError            FederationStateEnum = "ERROR"
)

type Federation struct {
	BackendMetastores map[string]BackendMetastore `json:"backendMetastores"`
	CreateTime        *string                     `json:"createTime"`
	EndpointURI       *string                     `json:"endpointUri"`
	Labels            map[string]string           `json:"labels"`
	Name              *string                     `json:"name"`
	State             *FederationStateEnum        `json:"state"`
	StateMessage      *string                     `json:"stateMessage"`
	UID               *string                     `json:"uid"`
	UpdateTime        *string                     `json:"updateTime"`
	Version           *string                     `json:"version"`
}
