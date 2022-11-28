package operations

import (
	"openapi/pkg/models/shared"
)

type GetContentJSONQueryParams struct {
	URL string `queryParam:"style=form,explode=true,name=url"`
}

type GetContentJSON200ApplicationJSON struct {
	Copyright  *string          `json:"copyright,omitempty"`
	NumResults *int64           `json:"num_results,omitempty"`
	Results    []shared.Article `json:"results,omitempty"`
	Status     *string          `json:"status,omitempty"`
}

type GetContentJSONRequest struct {
	QueryParams GetContentJSONQueryParams
}

type GetContentJSONResponse struct {
	ContentType                            string
	GetContentJSON200ApplicationJSONObject *GetContentJSON200ApplicationJSON
	StatusCode                             int64
}
