package operations

import (
	"openapi/pkg/models/shared"
)

type AvailableQueryParams struct {
	Status *shared.QuickConnectStateEnum `queryParam:"style=form,explode=true,name=status"`
}

type AvailableSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type AvailableRequest struct {
	QueryParams AvailableQueryParams
	Security    AvailableSecurity
}

type AvailableResponse struct {
	ContentType string
	StatusCode  int64
}
