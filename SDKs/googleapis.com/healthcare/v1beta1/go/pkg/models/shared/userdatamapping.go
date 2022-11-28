package shared

// UserDataMapping
// Maps a resource to the associated user and Attributes.
type UserDataMapping struct {
	ArchiveTime        *string     `json:"archiveTime,omitempty"`
	Archived           *bool       `json:"archived,omitempty"`
	DataID             *string     `json:"dataId,omitempty"`
	Name               *string     `json:"name,omitempty"`
	ResourceAttributes []Attribute `json:"resourceAttributes,omitempty"`
	UserID             *string     `json:"userId,omitempty"`
}

// UserDataMappingInput
// Maps a resource to the associated user and Attributes.
type UserDataMappingInput struct {
	DataID             *string     `json:"dataId,omitempty"`
	Name               *string     `json:"name,omitempty"`
	ResourceAttributes []Attribute `json:"resourceAttributes,omitempty"`
	UserID             *string     `json:"userId,omitempty"`
}
