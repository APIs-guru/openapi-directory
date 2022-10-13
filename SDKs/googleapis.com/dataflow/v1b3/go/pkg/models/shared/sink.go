package shared

type Sink struct {
	Codec map[string]interface{} `json:"codec"`
	Spec  map[string]interface{} `json:"spec"`
}
