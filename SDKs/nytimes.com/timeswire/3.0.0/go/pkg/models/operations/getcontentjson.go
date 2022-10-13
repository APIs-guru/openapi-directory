package operations

import (
	"openapi/pkg/models/shared"
)

type GetContentJSONQueryParams struct {
	URL string `queryParam:"style=form,explode=true,name=url"`
}

type GetContentJSONRequest struct {
	QueryParams GetContentJSONQueryParams
}

type GetContentJSON200ApplicationJSON struct {
	Copyright  *string          `json:"copyright"`
	NumResults *int64           `json:"num_results"`
	Results    []shared.Article `json:"results"`
	Status     *string          `json:"status"`
}

type GetContentJSONResponse struct {
	ContentType                            string
	GetContentJSON200ApplicationJSONObject *GetContentJSON200ApplicationJSON
	StatusCode                             int64
}
