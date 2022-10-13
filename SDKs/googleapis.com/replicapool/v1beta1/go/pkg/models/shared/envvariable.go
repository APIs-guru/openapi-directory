package shared

type EnvVariable struct {
	Hidden *bool   `json:"hidden"`
	Name   *string `json:"name"`
	Value  *string `json:"value"`
}
