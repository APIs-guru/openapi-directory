package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchedulesDirectCountriesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetSchedulesDirectCountriesRequest struct {
	Security GetSchedulesDirectCountriesSecurity
}

type GetSchedulesDirectCountriesResponse struct {
	ContentType                                               string
	GetSchedulesDirectCountries200ApplicationJSONBinaryString []byte
	StatusCode                                                int64
}
