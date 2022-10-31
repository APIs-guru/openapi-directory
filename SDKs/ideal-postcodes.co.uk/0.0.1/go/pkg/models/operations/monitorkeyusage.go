package operations

import (
	"openapi/pkg/models/shared"
)

type MonitorKeyUsagePathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type MonitorKeyUsageQueryParams struct {
	End      *int32  `queryParam:"style=form,explode=true,name=end"`
	Licensee *string `queryParam:"style=form,explode=true,name=licensee"`
	Start    *int32  `queryParam:"style=form,explode=true,name=start"`
	Tags     *string `queryParam:"style=form,explode=true,name=tags"`
}

type MonitorKeyUsageSecurity struct {
	APIKey    shared.SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
}

type MonitorKeyUsageRequest struct {
	PathParams  MonitorKeyUsagePathParams
	QueryParams MonitorKeyUsageQueryParams
	Security    MonitorKeyUsageSecurity
}

type MonitorKeyUsageResponse struct {
	ContentType            string
	ErrorResponseSchema    *shared.ErrorResponseSchema
	KeyUsageResponseSchema *shared.KeyUsageResponseSchema
	StatusCode             int64
}
