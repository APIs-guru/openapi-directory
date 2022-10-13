package shared

type FolderEntities struct {
	NextPageToken *string    `json:"nextPageToken"`
	Tag           []Tag      `json:"tag"`
	Trigger       []Trigger  `json:"trigger"`
	Variable      []Variable `json:"variable"`
}
