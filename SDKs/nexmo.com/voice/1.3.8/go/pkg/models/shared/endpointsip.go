package shared

type EndpointSip struct {
	Type string  `json:"type"`
	URI  *string `json:"uri"`
}
