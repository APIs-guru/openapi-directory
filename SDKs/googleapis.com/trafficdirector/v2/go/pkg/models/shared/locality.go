package shared

type Locality struct {
	Region  *string `json:"region"`
	SubZone *string `json:"subZone"`
	Zone    *string `json:"zone"`
}
