package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryJobPathParams struct {
	QueryjobID string `pathParam:"style=simple,explode=false,name=queryjob-id"`
}

type GetQueryJobSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetQueryJobRequest struct {
	PathParams GetQueryJobPathParams
	Security   GetQueryJobSecurity
}

type GetQueryJobResponse struct {
	ContentType string
	StatusCode  int64
	Queryjob    *shared.Queryjob
}
