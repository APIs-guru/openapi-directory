package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagePathParams struct {
	ImageID string `pathParam:"style=simple,explode=false,name=imageId"`
}

type GetImageDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetImageRequest struct {
	PathParams GetImagePathParams
}

type GetImageResponse struct {
	ContentType                          string
	ImagePrivate                         *shared.ImagePrivate
	StatusCode                           int64
	GetImageDefaultApplicationJSONObject *GetImageDefaultApplicationJSON
}
