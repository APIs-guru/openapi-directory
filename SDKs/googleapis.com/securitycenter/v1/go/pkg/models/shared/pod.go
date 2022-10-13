package shared

type Pod struct {
	Containers []Container `json:"containers"`
	Labels     []Label     `json:"labels"`
	Name       *string     `json:"name"`
	Ns         *string     `json:"ns"`
}
