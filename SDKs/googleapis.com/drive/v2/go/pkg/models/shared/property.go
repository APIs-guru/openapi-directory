package shared

type Property struct {
	Etag       *string `json:"etag"`
	Key        *string `json:"key"`
	Kind       *string `json:"kind"`
	SelfLink   *string `json:"selfLink"`
	Value      *string `json:"value"`
	Visibility *string `json:"visibility"`
}
