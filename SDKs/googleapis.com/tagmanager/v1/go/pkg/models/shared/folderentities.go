package shared

type FolderEntities struct {
	Tag      []Tag      `json:"tag,omitempty"`
	Trigger  []Trigger  `json:"trigger,omitempty"`
	Variable []Variable `json:"variable,omitempty"`
}
