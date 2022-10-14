package shared

type EnvironmentVariable struct {
	Name *string `json:"name,omitempty"`
	Val  *string `json:"val,omitempty"`
}
