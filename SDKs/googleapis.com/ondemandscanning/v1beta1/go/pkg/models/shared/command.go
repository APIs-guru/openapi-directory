package shared

type Command struct {
	Args    []string `json:"args,omitempty"`
	Dir     *string  `json:"dir,omitempty"`
	Env     []string `json:"env,omitempty"`
	ID      *string  `json:"id,omitempty"`
	Name    *string  `json:"name,omitempty"`
	WaitFor []string `json:"waitFor,omitempty"`
}
