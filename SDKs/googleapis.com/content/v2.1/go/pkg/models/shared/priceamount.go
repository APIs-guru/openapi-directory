package shared

type PriceAmount struct {
	Currency *string `json:"currency"`
	Value    *string `json:"value"`
}
