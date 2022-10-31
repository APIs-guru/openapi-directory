package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAPIVVersionCurrenciesHistoryPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetAPIVVersionCurrenciesHistoryQueryParams struct {
	End      *time.Time                 `queryParam:"style=form,explode=true,name=end"`
	Format   *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Interval *string                    `queryParam:"style=form,explode=true,name=interval"`
	Pairs    string                     `queryParam:"style=form,explode=true,name=pairs"`
	Start    time.Time                  `queryParam:"style=form,explode=true,name=start"`
	Token    string                     `queryParam:"style=form,explode=true,name=token"`
}

type GetAPIVVersionCurrenciesHistoryRequest struct {
	PathParams  GetAPIVVersionCurrenciesHistoryPathParams
	QueryParams GetAPIVVersionCurrenciesHistoryQueryParams
}

type GetAPIVVersionCurrenciesHistoryResponse struct {
	Body                        []byte
	ContentType                 string
	IntervalCollectionResponses []shared.IntervalCollectionResponse
	ProblemDetails              map[string]interface{}
	StatusCode                  int64
}
