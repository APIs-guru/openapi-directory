package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1BillsBillIDStagesPathParams struct {
	BillID int32 `pathParam:"style=simple,explode=false,name=billId"`
}

type GetAPIV1BillsBillIDStagesQueryParams struct {
	Skip *int32 `queryParam:"style=form,explode=true,name=Skip"`
	Take *int32 `queryParam:"style=form,explode=true,name=Take"`
}

type GetAPIV1BillsBillIDStagesRequest struct {
	PathParams  GetAPIV1BillsBillIDStagesPathParams
	QueryParams GetAPIV1BillsBillIDStagesQueryParams
}

type GetAPIV1BillsBillIDStagesResponse struct {
	Body                     []byte
	ContentType              string
	ProblemDetails           map[string]interface{}
	StageSummarySearchResult *shared.StageSummarySearchResult
	StatusCode               int64
}
