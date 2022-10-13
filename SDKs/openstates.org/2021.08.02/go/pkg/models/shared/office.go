package shared

type Office struct {
	Address *string `json:"address"`
	Fax     *string `json:"fax"`
	Name    string  `json:"name"`
	Voice   *string `json:"voice"`
}
