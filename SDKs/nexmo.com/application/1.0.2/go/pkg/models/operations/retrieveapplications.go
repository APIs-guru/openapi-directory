package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveApplicationsQueryParams struct {
	APIKey    string `queryParam:"style=form,explode=true,name=api_key"`
	APISecret string `queryParam:"style=form,explode=true,name=api_secret"`
	PageIndex *int64 `queryParam:"style=form,explode=true,name=page_index"`
	PageSize  *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type RetrieveApplicationsRequest struct {
	QueryParams RetrieveApplicationsQueryParams
}

type RetrieveApplicationsResponse struct {
	ContentType  string
	StatusCode   int64
	Applications *shared.Applications
}
