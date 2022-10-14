package operations

type GetzipcodeinfoQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	Zip     string `queryParam:"style=form,explode=true,name=zip"`
}

type GetzipcodeinfoRequest struct {
	QueryParams GetzipcodeinfoQueryParams
}

type Getzipcodeinfo200ApplicationJSON struct {
	AreaSquareMiles         *string `json:"AreaSquareMiles,omitempty"`
	City                    *string `json:"City,omitempty"`
	Code                    *string `json:"Code,omitempty"`
	Credits                 *string `json:"Credits,omitempty"`
	ElderlyHouseholdPercent *string `json:"ElderlyHouseholdPercent,omitempty"`
	FarmerHouseholdPercent  *string `json:"FarmerHouseholdPercent,omitempty"`
	IncomePercent100k       *string `json:"IncomePercent100k,omitempty"`
	IncomePercent200k       *string `json:"IncomePercent200k,omitempty"`
	IncomePercent50k        *string `json:"IncomePercent50k,omitempty"`
	Latitude                *string `json:"Latitude,omitempty"`
	Longitude               *string `json:"Longitude,omitempty"`
	MarriedHouseholdPercent *string `json:"MarriedHouseholdPercent,omitempty"`
	Population              *string `json:"Population,omitempty"`
	State                   *string `json:"State,omitempty"`
	ZipCode                 *string `json:"ZipCode,omitempty"`
}

type GetzipcodeinfoResponse struct {
	ContentType                            string
	StatusCode                             int64
	Getzipcodeinfo200ApplicationJSONObject *Getzipcodeinfo200ApplicationJSON
}
