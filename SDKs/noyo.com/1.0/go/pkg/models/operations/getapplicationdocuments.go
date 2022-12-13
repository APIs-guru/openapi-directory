package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationDocumentsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type GetApplicationDocumentsQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetApplicationDocumentsRequest struct {
	PathParams  GetApplicationDocumentsPathParams
	QueryParams GetApplicationDocumentsQueryParams
}

type GetApplicationDocumentsResponse struct {
	ContentType                        string
	PaginatedApplicationDocumentResult *shared.PaginatedApplicationDocumentResult
	StatusCode                         int64
}
