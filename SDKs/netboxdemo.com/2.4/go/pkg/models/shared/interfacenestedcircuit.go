package shared

type InterfaceNestedCircuit struct {
	Cid string  `json:"cid"`
	ID  *int64  `json:"id,omitempty"`
	URL *string `json:"url,omitempty"`
}
