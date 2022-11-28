package shared

// EnvironmentVariable
// EnvironmentVariable is a name-value pair to store environment variables for Process.
type EnvironmentVariable struct {
	Name *string `json:"name,omitempty"`
	Val  *string `json:"val,omitempty"`
}
