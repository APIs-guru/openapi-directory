package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSittingsQueryParams struct {
	DateFrom *time.Time        `queryParam:"style=form,explode=true,name=DateFrom"`
	DateTo   *time.Time        `queryParam:"style=form,explode=true,name=DateTo"`
	House    *shared.HouseEnum `queryParam:"style=form,explode=true,name=House"`
	Skip     *int32            `queryParam:"style=form,explode=true,name=Skip"`
	Take     *int32            `queryParam:"style=form,explode=true,name=Take"`
}

type GetSittingsRequest struct {
	QueryParams GetSittingsQueryParams
}

type GetSittingsResponse struct {
	BillStageSittingSearchResult *shared.BillStageSittingSearchResult
	Body                         []byte
	ContentType                  string
	ProblemDetails               map[string]interface{}
	StatusCode                   int64
}
