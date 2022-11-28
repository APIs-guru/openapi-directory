package shared

type WritableRegionInput struct {
	Name   string `json:"name"`
	Parent *int64 `json:"parent,omitempty"`
	Slug   string `json:"slug"`
}
