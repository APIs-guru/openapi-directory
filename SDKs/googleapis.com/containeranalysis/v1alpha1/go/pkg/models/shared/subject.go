package shared

type Subject struct {
	Digest map[string]string `json:"digest"`
	Name   *string           `json:"name"`
}
