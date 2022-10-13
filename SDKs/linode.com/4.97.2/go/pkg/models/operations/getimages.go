package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetImagesRequest struct {
	QueryParams GetImagesQueryParams
}

type GetImages200ApplicationJSON struct {
	Data    []shared.ImagePublic `json:"data"`
	Page    *int64               `json:"page"`
	Pages   *int64               `json:"pages"`
	Results *int64               `json:"results"`
}

type GetImagesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetImagesResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetImages200ApplicationJSONObject     *GetImages200ApplicationJSON
	GetImagesDefaultApplicationJSONObject *GetImagesDefaultApplicationJSON
}
