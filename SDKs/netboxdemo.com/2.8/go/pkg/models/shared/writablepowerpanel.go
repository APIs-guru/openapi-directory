package shared

type WritablePowerPanel struct {
	ID             *int64 `json:"id"`
	Name           string `json:"name"`
	PowerfeedCount *int64 `json:"powerfeed_count"`
	RackGroup      *int64 `json:"rack_group"`
	Site           int64  `json:"site"`
}
