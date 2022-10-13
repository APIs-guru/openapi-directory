package shared

type InboundNumbers struct {
	Count   *int64        `json:"count"`
	Numbers []Ownednumber `json:"numbers"`
}
