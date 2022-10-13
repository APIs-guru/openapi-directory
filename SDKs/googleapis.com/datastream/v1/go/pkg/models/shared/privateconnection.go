package shared

type PrivateConnectionStateEnum string

const (
	PrivateConnectionStateEnumStateUnspecified PrivateConnectionStateEnum = "STATE_UNSPECIFIED"
	PrivateConnectionStateEnumCreating         PrivateConnectionStateEnum = "CREATING"
	PrivateConnectionStateEnumCreated          PrivateConnectionStateEnum = "CREATED"
	PrivateConnectionStateEnumFailed           PrivateConnectionStateEnum = "FAILED"
	PrivateConnectionStateEnumDeleting         PrivateConnectionStateEnum = "DELETING"
	PrivateConnectionStateEnumFailedToDelete   PrivateConnectionStateEnum = "FAILED_TO_DELETE"
)

type PrivateConnection struct {
	CreateTime       *string                     `json:"createTime"`
	DisplayName      *string                     `json:"displayName"`
	Error            *Error                      `json:"error"`
	Labels           map[string]string           `json:"labels"`
	Name             *string                     `json:"name"`
	State            *PrivateConnectionStateEnum `json:"state"`
	UpdateTime       *string                     `json:"updateTime"`
	VpcPeeringConfig *VpcPeeringConfig           `json:"vpcPeeringConfig"`
}
