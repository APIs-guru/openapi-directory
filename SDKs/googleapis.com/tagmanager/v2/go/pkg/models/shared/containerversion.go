package shared

type ContainerVersion struct {
	AccountID          *string           `json:"accountId"`
	BuiltInVariable    []BuiltInVariable `json:"builtInVariable"`
	Client             []Client          `json:"client"`
	Container          *Container        `json:"container"`
	ContainerID        *string           `json:"containerId"`
	ContainerVersionID *string           `json:"containerVersionId"`
	CustomTemplate     []CustomTemplate  `json:"customTemplate"`
	Deleted            *bool             `json:"deleted"`
	Description        *string           `json:"description"`
	Fingerprint        *string           `json:"fingerprint"`
	Folder             []Folder          `json:"folder"`
	Name               *string           `json:"name"`
	Path               *string           `json:"path"`
	Tag                []Tag             `json:"tag"`
	TagManagerURL      *string           `json:"tagManagerUrl"`
	Trigger            []Trigger         `json:"trigger"`
	Variable           []Variable        `json:"variable"`
	Zone               []Zone            `json:"zone"`
}
