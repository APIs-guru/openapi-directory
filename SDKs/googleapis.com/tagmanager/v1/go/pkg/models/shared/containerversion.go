package shared

type ContainerVersion struct {
	AccountID          *string    `json:"accountId"`
	Container          *Container `json:"container"`
	ContainerID        *string    `json:"containerId"`
	ContainerVersionID *string    `json:"containerVersionId"`
	Deleted            *bool      `json:"deleted"`
	Fingerprint        *string    `json:"fingerprint"`
	Folder             []Folder   `json:"folder"`
	Macro              []Macro    `json:"macro"`
	Name               *string    `json:"name"`
	Notes              *string    `json:"notes"`
	Rule               []Rule     `json:"rule"`
	Tag                []Tag      `json:"tag"`
	Trigger            []Trigger  `json:"trigger"`
	Variable           []Variable `json:"variable"`
}
