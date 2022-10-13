package shared

type WritableRegion struct {
	ID     *int64 `json:"id"`
	Name   string `json:"name"`
	Parent *int64 `json:"parent"`
	Slug   string `json:"slug"`
}
