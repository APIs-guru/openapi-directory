package shared

type MemcacheParameters struct {
	ID     *string           `json:"id,omitempty"`
	Params map[string]string `json:"params,omitempty"`
}

type MemcacheParametersInput struct {
	Params map[string]string `json:"params,omitempty"`
}
