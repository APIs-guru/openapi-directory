package shared

type NestedPowerPanel struct {
	ID             *int64  `json:"id"`
	Name           string  `json:"name"`
	PowerfeedCount *int64  `json:"powerfeed_count"`
	URL            *string `json:"url"`
}
