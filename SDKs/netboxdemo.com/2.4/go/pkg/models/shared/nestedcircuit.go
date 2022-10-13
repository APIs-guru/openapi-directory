package shared

type NestedCircuit struct {
	Cid string  `json:"cid"`
	ID  *int64  `json:"id"`
	URL *string `json:"url"`
}
