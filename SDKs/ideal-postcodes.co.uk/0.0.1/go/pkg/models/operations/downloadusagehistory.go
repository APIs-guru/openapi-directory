package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadUsageHistoryPathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type DownloadUsageHistoryQueryParams struct {
	End      *int32  `queryParam:"style=form,explode=true,name=end"`
	Licensee *string `queryParam:"style=form,explode=true,name=licensee"`
	Start    *int32  `queryParam:"style=form,explode=true,name=start"`
}

type DownloadUsageHistorySecurity struct {
	APIKey    shared.SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
}

type DownloadUsageHistoryRequest struct {
	PathParams  DownloadUsageHistoryPathParams
	QueryParams DownloadUsageHistoryQueryParams
	Security    DownloadUsageHistorySecurity
}

type DownloadUsageHistoryResponse struct {
	Body                []byte
	ContentType         string
	ErrorResponseSchema *shared.ErrorResponseSchema
	StatusCode          int64
}
