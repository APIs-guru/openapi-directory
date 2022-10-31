package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIVVersionCurrenciesRateSupportedPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetAPIVVersionCurrenciesRateSupportedQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Token  string                     `queryParam:"style=form,explode=true,name=token"`
}

type GetAPIVVersionCurrenciesRateSupportedRequest struct {
	PathParams  GetAPIVVersionCurrenciesRateSupportedPathParams
	QueryParams GetAPIVVersionCurrenciesRateSupportedQueryParams
}

type GetAPIVVersionCurrenciesRateSupportedResponse struct {
	Body                                                           []byte
	ContentType                                                    string
	GetAPIVVersionCurrenciesRateSupported200ApplicationJSONStrings []string
	ProblemDetails                                                 map[string]interface{}
	StatusCode                                                     int64
}
