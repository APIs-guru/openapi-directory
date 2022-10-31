package shared

type Store struct {
	Address    *interface{} `json:"address,omitempty"`
	Code       *string      `json:"code,omitempty"`
	Country    *string      `json:"country,omitempty"`
	Currency   *string      `json:"currency,omitempty"`
	Email      *string      `json:"email,omitempty"`
	HooksToken *string      `json:"hooks_token,omitempty"`
	Logo       *string      `json:"logo,omitempty"`
	Name       *string      `json:"name,omitempty"`
	Timezone   *string      `json:"timezone,omitempty"`
	URL        *string      `json:"url,omitempty"`
	WeightUnit *string      `json:"weight_unit,omitempty"`
}
