package shared

type Command struct {
	Args    []string `json:"args"`
	Dir     *string  `json:"dir"`
	Env     []string `json:"env"`
	ID      *string  `json:"id"`
	Name    *string  `json:"name"`
	WaitFor []string `json:"waitFor"`
}
