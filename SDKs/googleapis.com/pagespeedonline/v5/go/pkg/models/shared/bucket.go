package shared

type Bucket struct {
	Max        *int32   `json:"max"`
	Min        *int32   `json:"min"`
	Proportion *float64 `json:"proportion"`
}
