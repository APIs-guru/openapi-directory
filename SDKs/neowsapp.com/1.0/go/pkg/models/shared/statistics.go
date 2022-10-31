package shared

type Statistics struct {
	CloseApproachCount   *int64  `json:"close_approach_count,omitempty"`
	LastUpdated          *string `json:"last_updated,omitempty"`
	NasaJplURL           *URL    `json:"nasa_jpl_url,omitempty"`
	NearEarthObjectCount *int64  `json:"near_earth_object_count,omitempty"`
	Source               *string `json:"source,omitempty"`
}
