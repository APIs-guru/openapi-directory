package operations

type GetemailinfoQueryParams struct {
	Email   string `queryParam:"style=form,explode=true,name=email"`
	License string `queryParam:"style=form,explode=true,name=license"`
}

type GetemailinfoRequest struct {
	QueryParams GetemailinfoQueryParams
}

type Getemailinfo200ApplicationJSON struct {
	Code             *string `json:"Code"`
	Credits          *string `json:"Credits"`
	Email            *string `json:"Email"`
	Geolocation      *string `json:"Geolocation"`
	Info             *string `json:"Info"`
	IsDisposable     *string `json:"IsDisposable"`
	IsEducational    *string `json:"IsEducational"`
	IsGeneric        *string `json:"IsGeneric"`
	IsGovernment     *string `json:"IsGovernment"`
	IsOrganizational *string `json:"IsOrganizational"`
	IsVulgar         *string `json:"IsVulgar"`
	Response         *string `json:"Response"`
}

type GetemailinfoResponse struct {
	ContentType                          string
	StatusCode                           int64
	Getemailinfo200ApplicationJSONObject *Getemailinfo200ApplicationJSON
}
