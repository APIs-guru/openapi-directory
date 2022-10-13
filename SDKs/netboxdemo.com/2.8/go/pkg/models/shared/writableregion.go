package shared

type WritableRegion struct {
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	Parent      *int64  `json:"parent"`
	SiteCount   *int64  `json:"site_count"`
	Slug        string  `json:"slug"`
}
