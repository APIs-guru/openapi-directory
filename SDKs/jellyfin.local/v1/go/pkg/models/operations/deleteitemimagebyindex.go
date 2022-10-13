package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteItemImageByIndexPathParams struct {
	ImageIndex int32                `pathParam:"style=simple,explode=false,name=imageIndex"`
	ImageType  shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	ItemID     string               `pathParam:"style=simple,explode=false,name=itemId"`
}

type DeleteItemImageByIndexSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteItemImageByIndexRequest struct {
	PathParams DeleteItemImageByIndexPathParams
	Security   DeleteItemImageByIndexSecurity
}

type DeleteItemImageByIndexResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
