package shared

type NestedRegion struct {
	ID        *int64  `json:"id"`
	Name      string  `json:"name"`
	SiteCount *int64  `json:"site_count"`
	Slug      string  `json:"slug"`
	URL       *string `json:"url"`
}
