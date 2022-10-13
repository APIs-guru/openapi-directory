package operations

import (
	"openapi/pkg/models/shared"
)

type PostUserImageByIndexPathParams struct {
	ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	Index     int32                `pathParam:"style=simple,explode=false,name=index"`
	UserID    string               `pathParam:"style=simple,explode=false,name=userId"`
}

type PostUserImageByIndexSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type PostUserImageByIndexRequest struct {
	PathParams PostUserImageByIndexPathParams
	Security   PostUserImageByIndexSecurity
}

type PostUserImageByIndexResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
