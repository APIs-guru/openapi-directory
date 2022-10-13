package shared

type Environment struct {
	ContainerImage    *ContainerImage `json:"containerImage"`
	CreateTime        *string         `json:"createTime"`
	Description       *string         `json:"description"`
	DisplayName       *string         `json:"displayName"`
	Name              *string         `json:"name"`
	PostStartupScript *string         `json:"postStartupScript"`
	VMImage           *VMImage        `json:"vmImage"`
}
