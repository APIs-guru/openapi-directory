package shared

type ProjectStateEnum string

const (
	ProjectStateEnumStateUnspecified ProjectStateEnum = "STATE_UNSPECIFIED"
	ProjectStateEnumActive           ProjectStateEnum = "ACTIVE"
	ProjectStateEnumDeleteRequested  ProjectStateEnum = "DELETE_REQUESTED"
)

type Project struct {
	CreateTime  *string           `json:"createTime,omitempty"`
	DeleteTime  *string           `json:"deleteTime,omitempty"`
	DisplayName *string           `json:"displayName,omitempty"`
	Etag        *string           `json:"etag,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Parent      *string           `json:"parent,omitempty"`
	ProjectID   *string           `json:"projectId,omitempty"`
	State       *ProjectStateEnum `json:"state,omitempty"`
	UpdateTime  *string           `json:"updateTime,omitempty"`
}
