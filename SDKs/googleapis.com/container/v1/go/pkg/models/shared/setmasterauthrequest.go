package shared

type SetMasterAuthRequestActionEnum string

const (
	SetMasterAuthRequestActionEnumUnknown          SetMasterAuthRequestActionEnum = "UNKNOWN"
	SetMasterAuthRequestActionEnumSetPassword      SetMasterAuthRequestActionEnum = "SET_PASSWORD"
	SetMasterAuthRequestActionEnumGeneratePassword SetMasterAuthRequestActionEnum = "GENERATE_PASSWORD"
	SetMasterAuthRequestActionEnumSetUsername      SetMasterAuthRequestActionEnum = "SET_USERNAME"
)

// SetMasterAuthRequest
// SetMasterAuthRequest updates the admin password of a cluster.
type SetMasterAuthRequest struct {
	Action    *SetMasterAuthRequestActionEnum `json:"action,omitempty"`
	ClusterID *string                         `json:"clusterId,omitempty"`
	Name      *string                         `json:"name,omitempty"`
	ProjectID *string                         `json:"projectId,omitempty"`
	Update    *MasterAuth                     `json:"update,omitempty"`
	Zone      *string                         `json:"zone,omitempty"`
}
