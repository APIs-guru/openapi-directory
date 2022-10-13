package operations

type GetzipcodeinfoQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	Zip     string `queryParam:"style=form,explode=true,name=zip"`
}

type GetzipcodeinfoRequest struct {
	QueryParams GetzipcodeinfoQueryParams
}

type Getzipcodeinfo200ApplicationJSON struct {
	AreaSquareMiles         *string `json:"AreaSquareMiles"`
	City                    *string `json:"City"`
	Code                    *string `json:"Code"`
	Credits                 *string `json:"Credits"`
	ElderlyHouseholdPercent *string `json:"ElderlyHouseholdPercent"`
	FarmerHouseholdPercent  *string `json:"FarmerHouseholdPercent"`
	IncomePercent100k       *string `json:"IncomePercent100k"`
	IncomePercent200k       *string `json:"IncomePercent200k"`
	IncomePercent50k        *string `json:"IncomePercent50k"`
	Latitude                *string `json:"Latitude"`
	Longitude               *string `json:"Longitude"`
	MarriedHouseholdPercent *string `json:"MarriedHouseholdPercent"`
	Population              *string `json:"Population"`
	State                   *string `json:"State"`
	ZipCode                 *string `json:"ZipCode"`
}

type GetzipcodeinfoResponse struct {
	ContentType                            string
	StatusCode                             int64
	Getzipcodeinfo200ApplicationJSONObject *Getzipcodeinfo200ApplicationJSON
}
