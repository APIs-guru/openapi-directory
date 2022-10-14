package shared

type TagBinding struct {
	Name     *string `json:"name,omitempty"`
	Parent   *string `json:"parent,omitempty"`
	TagValue *string `json:"tagValue,omitempty"`
}
