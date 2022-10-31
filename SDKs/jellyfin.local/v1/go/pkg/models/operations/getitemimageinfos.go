package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemImageInfosPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetItemImageInfosSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetItemImageInfosRequest struct {
	PathParams GetItemImageInfosPathParams
	Security   GetItemImageInfosSecurity
}

type GetItemImageInfosResponse struct {
	ContentType    string
	ImageInfos     []shared.ImageInfo
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
