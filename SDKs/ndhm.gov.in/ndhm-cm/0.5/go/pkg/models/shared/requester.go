package shared

type RequesterIdentifier struct {
	System *string `json:"system"`
	Type   string  `json:"type"`
	Value  string  `json:"value"`
}

type Requester struct {
	Identifier *RequesterIdentifier `json:"identifier"`
	Name       string               `json:"name"`
}
