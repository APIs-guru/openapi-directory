package shared

type EnvironmentVariable struct {
	Name *string `json:"name"`
	Val  *string `json:"val"`
}
