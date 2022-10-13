package shared

type ProjectStateEnum string

const (
	ProjectStateEnumStateUnspecified ProjectStateEnum = "STATE_UNSPECIFIED"
	ProjectStateEnumActive           ProjectStateEnum = "ACTIVE"
	ProjectStateEnumDeleteRequested  ProjectStateEnum = "DELETE_REQUESTED"
)

type Project struct {
	CreateTime  *string           `json:"createTime"`
	DeleteTime  *string           `json:"deleteTime"`
	DisplayName *string           `json:"displayName"`
	Etag        *string           `json:"etag"`
	Labels      map[string]string `json:"labels"`
	Name        *string           `json:"name"`
	Parent      *string           `json:"parent"`
	ProjectID   *string           `json:"projectId"`
	State       *ProjectStateEnum `json:"state"`
	UpdateTime  *string           `json:"updateTime"`
}
