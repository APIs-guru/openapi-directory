package shared

type ProjectStateEnum string

const (
	ProjectStateEnumStateUnspecified ProjectStateEnum = "STATE_UNSPECIFIED"
	ProjectStateEnumActive           ProjectStateEnum = "ACTIVE"
	ProjectStateEnumDeleteRequested  ProjectStateEnum = "DELETE_REQUESTED"
)

// ProjectInput
// A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.
type ProjectInput struct {
	DisplayName *string           `json:"displayName,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Parent      *string           `json:"parent,omitempty"`
	ProjectID   *string           `json:"projectId,omitempty"`
}

// Project
// A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.
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
