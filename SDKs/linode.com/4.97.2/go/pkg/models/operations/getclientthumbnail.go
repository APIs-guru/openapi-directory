package operations

import (
	"openapi/pkg/models/shared"
)

type GetClientThumbnailPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
}

type GetClientThumbnailRequest struct {
	PathParams GetClientThumbnailPathParams
}

type GetClientThumbnailDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetClientThumbnailResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetClientThumbnail200ImagePngBinaryString      []byte
	GetClientThumbnailDefaultApplicationJSONObject *GetClientThumbnailDefaultApplicationJSON
}
