package shared

type Region struct {
	ID     *int64        `json:"id"`
	Name   string        `json:"name"`
	Parent *NestedRegion `json:"parent"`
	Slug   string        `json:"slug"`
}
