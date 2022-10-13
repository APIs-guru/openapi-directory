package shared

type FolderEntities struct {
	Tag      []Tag      `json:"tag"`
	Trigger  []Trigger  `json:"trigger"`
	Variable []Variable `json:"variable"`
}
