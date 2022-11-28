package shared

// ContainerVersion
// Represents a Google Tag Manager Container Version.
type ContainerVersion struct {
	AccountID          *string    `json:"accountId,omitempty"`
	Container          *Container `json:"container,omitempty"`
	ContainerID        *string    `json:"containerId,omitempty"`
	ContainerVersionID *string    `json:"containerVersionId,omitempty"`
	Deleted            *bool      `json:"deleted,omitempty"`
	Fingerprint        *string    `json:"fingerprint,omitempty"`
	Folder             []Folder   `json:"folder,omitempty"`
	Macro              []Macro    `json:"macro,omitempty"`
	Name               *string    `json:"name,omitempty"`
	Notes              *string    `json:"notes,omitempty"`
	Rule               []Rule     `json:"rule,omitempty"`
	Tag                []Tag      `json:"tag,omitempty"`
	Trigger            []Trigger  `json:"trigger,omitempty"`
	Variable           []Variable `json:"variable,omitempty"`
}
