package shared

type Material struct {
	Digest map[string]string `json:"digest"`
	URI    *string           `json:"uri"`
}
