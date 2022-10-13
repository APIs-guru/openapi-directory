package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeysSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetKeysRequest struct {
	Security GetKeysSecurity
}

type GetKeysResponse struct {
	AuthenticationInfoQueryResult *shared.AuthenticationInfoQueryResult
	ContentType                   string
	StatusCode                    int64
}
