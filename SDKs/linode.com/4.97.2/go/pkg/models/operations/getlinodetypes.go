package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeTypes200ApplicationJSON struct {
	Data    []shared.LinodeType `json:"data"`
	Page    *int64              `json:"page"`
	Pages   *int64              `json:"pages"`
	Results *int64              `json:"results"`
}

type GetLinodeTypesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLinodeTypesResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetLinodeTypes200ApplicationJSONObject     *GetLinodeTypes200ApplicationJSON
	GetLinodeTypesDefaultApplicationJSONObject *GetLinodeTypesDefaultApplicationJSON
}
