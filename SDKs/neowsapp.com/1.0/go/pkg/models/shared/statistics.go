package shared

type Statistics struct {
	CloseApproachCount   *int64  `json:"close_approach_count"`
	LastUpdated          *string `json:"last_updated"`
	NasaJplURL           *URL    `json:"nasa_jpl_url"`
	NearEarthObjectCount *int64  `json:"near_earth_object_count"`
	Source               *string `json:"source"`
}
