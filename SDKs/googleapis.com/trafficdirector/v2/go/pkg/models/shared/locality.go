package shared

type Locality struct {
	Region  *string `json:"region,omitempty"`
	SubZone *string `json:"subZone,omitempty"`
	Zone    *string `json:"zone,omitempty"`
}
