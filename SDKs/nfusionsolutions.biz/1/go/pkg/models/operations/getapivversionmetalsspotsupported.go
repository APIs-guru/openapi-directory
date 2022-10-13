package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIVVersionMetalsSpotSupportedPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetAPIVVersionMetalsSpotSupportedQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Token  string                     `queryParam:"style=form,explode=true,name=token"`
}

type GetAPIVVersionMetalsSpotSupportedRequest struct {
	PathParams  GetAPIVVersionMetalsSpotSupportedPathParams
	QueryParams GetAPIVVersionMetalsSpotSupportedQueryParams
}

type GetAPIVVersionMetalsSpotSupportedResponse struct {
	Body                                                       []byte
	ContentType                                                string
	GetAPIVVersionMetalsSpotSupported200ApplicationJSONStrings []string
	ProblemDetails                                             map[string]interface{}
	StatusCode                                                 int64
}
