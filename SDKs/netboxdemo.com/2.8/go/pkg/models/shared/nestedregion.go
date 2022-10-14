package shared

type NestedRegion struct {
	ID        *int64  `json:"id,omitempty"`
	Name      string  `json:"name"`
	SiteCount *int64  `json:"site_count,omitempty"`
	Slug      string  `json:"slug"`
	URL       *string `json:"url,omitempty"`
}
