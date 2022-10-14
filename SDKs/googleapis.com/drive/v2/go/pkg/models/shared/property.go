package shared

type Property struct {
	Etag       *string `json:"etag,omitempty"`
	Key        *string `json:"key,omitempty"`
	Kind       *string `json:"kind,omitempty"`
	SelfLink   *string `json:"selfLink,omitempty"`
	Value      *string `json:"value,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}
