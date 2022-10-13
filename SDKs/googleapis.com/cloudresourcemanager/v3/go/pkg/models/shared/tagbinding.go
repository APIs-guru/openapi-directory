package shared

type TagBinding struct {
	Name     *string `json:"name"`
	Parent   *string `json:"parent"`
	TagValue *string `json:"tagValue"`
}
