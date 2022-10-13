package shared

type Response struct {
	City        *string  `json:"city"`
	Country     *string  `json:"country"`
	CountryCode *string  `json:"country_code"`
	IP          *string  `json:"ip"`
	Latitude    *float32 `json:"latitude"`
	Longitude   *float32 `json:"longitude"`
	State       *string  `json:"state"`
	Timezone    *string  `json:"timezone"`
	Zip         *string  `json:"zip"`
}
