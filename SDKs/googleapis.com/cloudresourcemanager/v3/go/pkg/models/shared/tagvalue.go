package shared

// TagValue
// A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.
type TagValue struct {
	CreateTime     *string `json:"createTime,omitempty"`
	Description    *string `json:"description,omitempty"`
	Etag           *string `json:"etag,omitempty"`
	Name           *string `json:"name,omitempty"`
	NamespacedName *string `json:"namespacedName,omitempty"`
	Parent         *string `json:"parent,omitempty"`
	ShortName      *string `json:"shortName,omitempty"`
	UpdateTime     *string `json:"updateTime,omitempty"`
}

// TagValueInput
// A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.
type TagValueInput struct {
	Description *string `json:"description,omitempty"`
	Etag        *string `json:"etag,omitempty"`
	Name        *string `json:"name,omitempty"`
	Parent      *string `json:"parent,omitempty"`
	ShortName   *string `json:"shortName,omitempty"`
}
