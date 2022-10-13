package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteItemImagePathParams struct {
	ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	ItemID    string               `pathParam:"style=simple,explode=false,name=itemId"`
}

type DeleteItemImageQueryParams struct {
	ImageIndex *int32 `queryParam:"style=form,explode=true,name=imageIndex"`
}

type DeleteItemImageSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteItemImageRequest struct {
	PathParams  DeleteItemImagePathParams
	QueryParams DeleteItemImageQueryParams
	Security    DeleteItemImageSecurity
}

type DeleteItemImageResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
