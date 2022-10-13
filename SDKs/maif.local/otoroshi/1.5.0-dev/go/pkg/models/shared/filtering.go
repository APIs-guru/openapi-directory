package shared

type Filtering struct {
	Exclude []map[string]string `json:"exclude"`
	Include []map[string]string `json:"include"`
}
