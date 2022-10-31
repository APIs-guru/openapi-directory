package operations

import (
	"openapi/pkg/models/shared"
)

type PostUserImagePathParams struct {
	ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	UserID    string               `pathParam:"style=simple,explode=false,name=userId"`
}

type PostUserImageQueryParams struct {
	Index *int32 `queryParam:"style=form,explode=true,name=index"`
}

type PostUserImageSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type PostUserImageRequest struct {
	PathParams  PostUserImagePathParams
	QueryParams PostUserImageQueryParams
	Security    PostUserImageSecurity
}

type PostUserImageResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
