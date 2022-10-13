package shared

type NestedManufacturer struct {
	DevicetypeCount *int64  `json:"devicetype_count"`
	ID              *int64  `json:"id"`
	Name            string  `json:"name"`
	Slug            string  `json:"slug"`
	URL             *string `json:"url"`
}
