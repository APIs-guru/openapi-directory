package shared

type Office struct {
	Address *string `json:"address,omitempty"`
	Fax     *string `json:"fax,omitempty"`
	Name    string  `json:"name"`
	Voice   *string `json:"voice,omitempty"`
}
