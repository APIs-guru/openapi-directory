package operations

type GetemailinfoQueryParams struct {
	Email   string `queryParam:"style=form,explode=true,name=email"`
	License string `queryParam:"style=form,explode=true,name=license"`
}

type GetemailinfoRequest struct {
	QueryParams GetemailinfoQueryParams
}

type Getemailinfo200ApplicationJSON struct {
	Code             *string `json:"Code,omitempty"`
	Credits          *string `json:"Credits,omitempty"`
	Email            *string `json:"Email,omitempty"`
	Geolocation      *string `json:"Geolocation,omitempty"`
	Info             *string `json:"Info,omitempty"`
	IsDisposable     *string `json:"IsDisposable,omitempty"`
	IsEducational    *string `json:"IsEducational,omitempty"`
	IsGeneric        *string `json:"IsGeneric,omitempty"`
	IsGovernment     *string `json:"IsGovernment,omitempty"`
	IsOrganizational *string `json:"IsOrganizational,omitempty"`
	IsVulgar         *string `json:"IsVulgar,omitempty"`
	Response         *string `json:"Response,omitempty"`
}

type GetemailinfoResponse struct {
	ContentType                          string
	StatusCode                           int64
	Getemailinfo200ApplicationJSONObject *Getemailinfo200ApplicationJSON
}
