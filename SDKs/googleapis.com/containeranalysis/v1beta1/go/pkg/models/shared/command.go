package shared

// Command
// Command describes a step performed as part of the build pipeline.
type Command struct {
	Args    []string `json:"args,omitempty"`
	Dir     *string  `json:"dir,omitempty"`
	Env     []string `json:"env,omitempty"`
	ID      *string  `json:"id,omitempty"`
	Name    *string  `json:"name,omitempty"`
	WaitFor []string `json:"waitFor,omitempty"`
}
