package shared

// TagBinding
// A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
type TagBinding struct {
	Name     *string `json:"name,omitempty"`
	Parent   *string `json:"parent,omitempty"`
	TagValue *string `json:"tagValue,omitempty"`
}

// TagBindingInput
// A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
type TagBindingInput struct {
	Parent   *string `json:"parent,omitempty"`
	TagValue *string `json:"tagValue,omitempty"`
}
