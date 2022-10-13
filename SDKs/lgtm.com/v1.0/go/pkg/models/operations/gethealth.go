package operations

import (
	"openapi/pkg/models/shared"
)

type GetHealthSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetHealthRequest struct {
	Security GetHealthSecurity
}

type GetHealthResponse struct {
	ContentType string
	StatusCode  int64
	Health      *shared.Health
}
