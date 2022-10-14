package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagePathParams struct {
	ImageID string `pathParam:"style=simple,explode=false,name=imageId"`
}

type GetImageRequest struct {
	PathParams GetImagePathParams
}

type GetImageDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetImageResponse struct {
	ContentType                          string
	ImagePrivate                         *shared.ImagePrivate
	StatusCode                           int64
	GetImageDefaultApplicationJSONObject *GetImageDefaultApplicationJSON
}
