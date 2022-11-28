package shared

// Locality
// Identifies location of where either Envoy runs or where upstream hosts run.
type Locality struct {
	Region  *string `json:"region,omitempty"`
	SubZone *string `json:"subZone,omitempty"`
	Zone    *string `json:"zone,omitempty"`
}
