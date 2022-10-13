package operations

import (
	"openapi/pkg/models/shared"
)

type GetMetricsSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetMetricsRequest struct {
	Security GetMetricsSecurity
}

type GetMetricsResponse struct {
	ContentType string
	StatusCode  int64
	MetricsList *shared.MetricsList
}
