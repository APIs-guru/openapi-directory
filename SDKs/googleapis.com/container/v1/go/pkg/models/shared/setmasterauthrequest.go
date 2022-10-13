package shared

type SetMasterAuthRequestActionEnum string

const (
	SetMasterAuthRequestActionEnumUnknown          SetMasterAuthRequestActionEnum = "UNKNOWN"
	SetMasterAuthRequestActionEnumSetPassword      SetMasterAuthRequestActionEnum = "SET_PASSWORD"
	SetMasterAuthRequestActionEnumGeneratePassword SetMasterAuthRequestActionEnum = "GENERATE_PASSWORD"
	SetMasterAuthRequestActionEnumSetUsername      SetMasterAuthRequestActionEnum = "SET_USERNAME"
)

type SetMasterAuthRequest struct {
	Action    *SetMasterAuthRequestActionEnum `json:"action"`
	ClusterID *string                         `json:"clusterId"`
	Name      *string                         `json:"name"`
	ProjectID *string                         `json:"projectId"`
	Update    *MasterAuth                     `json:"update"`
	Zone      *string                         `json:"zone"`
}
