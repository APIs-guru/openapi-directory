package shared

type Store struct {
	Address    *interface{} `json:"address"`
	Code       *string      `json:"code"`
	Country    *string      `json:"country"`
	Currency   *string      `json:"currency"`
	Email      *string      `json:"email"`
	HooksToken *string      `json:"hooks_token"`
	Logo       *string      `json:"logo"`
	Name       *string      `json:"name"`
	Timezone   *string      `json:"timezone"`
	URL        *string      `json:"url"`
	WeightUnit *string      `json:"weight_unit"`
}
