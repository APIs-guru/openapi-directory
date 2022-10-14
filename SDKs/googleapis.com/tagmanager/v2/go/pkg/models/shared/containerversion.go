package shared

type ContainerVersion struct {
	AccountID          *string           `json:"accountId,omitempty"`
	BuiltInVariable    []BuiltInVariable `json:"builtInVariable,omitempty"`
	Client             []Client          `json:"client,omitempty"`
	Container          *Container        `json:"container,omitempty"`
	ContainerID        *string           `json:"containerId,omitempty"`
	ContainerVersionID *string           `json:"containerVersionId,omitempty"`
	CustomTemplate     []CustomTemplate  `json:"customTemplate,omitempty"`
	Deleted            *bool             `json:"deleted,omitempty"`
	Description        *string           `json:"description,omitempty"`
	Fingerprint        *string           `json:"fingerprint,omitempty"`
	Folder             []Folder          `json:"folder,omitempty"`
	Name               *string           `json:"name,omitempty"`
	Path               *string           `json:"path,omitempty"`
	Tag                []Tag             `json:"tag,omitempty"`
	TagManagerURL      *string           `json:"tagManagerUrl,omitempty"`
	Trigger            []Trigger         `json:"trigger,omitempty"`
	Variable           []Variable        `json:"variable,omitempty"`
	Zone               []Zone            `json:"zone,omitempty"`
}
