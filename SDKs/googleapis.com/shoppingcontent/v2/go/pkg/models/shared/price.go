package shared

type Price struct {
	Currency *string `json:"currency"`
	Value    *string `json:"value"`
}
