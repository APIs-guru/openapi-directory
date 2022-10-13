package shared

type Setting struct {
	Etag  *string `json:"etag"`
	ID    *string `json:"id"`
	Kind  *string `json:"kind"`
	Value *string `json:"value"`
}
