package shared

type NestedManufacturer struct {
	DevicetypeCount *int64  `json:"devicetype_count,omitempty"`
	ID              *int64  `json:"id,omitempty"`
	Name            string  `json:"name"`
	Slug            string  `json:"slug"`
	URL             *string `json:"url,omitempty"`
}
