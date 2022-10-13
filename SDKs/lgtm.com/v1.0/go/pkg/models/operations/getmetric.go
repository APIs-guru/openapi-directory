package operations

import (
	"openapi/pkg/models/shared"
)

type GetMetricPathParams struct {
	MetricID string `pathParam:"style=simple,explode=false,name=metric-id"`
}

type GetMetricSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetMetricRequest struct {
	PathParams GetMetricPathParams
	Security   GetMetricSecurity
}

type GetMetricResponse struct {
	ContentType string
	StatusCode  int64
	Metric      *shared.Metric
}
