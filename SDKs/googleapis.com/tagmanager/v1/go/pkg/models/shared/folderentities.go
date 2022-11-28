package shared

// FolderEntities
// Represents a Google Tag Manager Folder's contents.
type FolderEntities struct {
	Tag      []Tag      `json:"tag,omitempty"`
	Trigger  []Trigger  `json:"trigger,omitempty"`
	Variable []Variable `json:"variable,omitempty"`
}
