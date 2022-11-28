package shared

// EnvironmentInput
// Definition of a software environment that is used to start a notebook instance.
type EnvironmentInput struct {
	ContainerImage    *ContainerImage `json:"containerImage,omitempty"`
	Description       *string         `json:"description,omitempty"`
	DisplayName       *string         `json:"displayName,omitempty"`
	PostStartupScript *string         `json:"postStartupScript,omitempty"`
	VMImage           *VMImage        `json:"vmImage,omitempty"`
}

// Environment
// Definition of a software environment that is used to start a notebook instance.
type Environment struct {
	ContainerImage    *ContainerImage `json:"containerImage,omitempty"`
	CreateTime        *string         `json:"createTime,omitempty"`
	Description       *string         `json:"description,omitempty"`
	DisplayName       *string         `json:"displayName,omitempty"`
	Name              *string         `json:"name,omitempty"`
	PostStartupScript *string         `json:"postStartupScript,omitempty"`
	VMImage           *VMImage        `json:"vmImage,omitempty"`
}
