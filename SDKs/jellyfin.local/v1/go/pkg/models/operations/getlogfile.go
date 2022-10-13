package operations

import (
	"openapi/pkg/models/shared"
)

type GetLogFileQueryParams struct {
	Name string `queryParam:"style=form,explode=true,name=name"`
}

type GetLogFileSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetLogFileRequest struct {
	QueryParams GetLogFileQueryParams
	Security    GetLogFileSecurity
}

type GetLogFileResponse struct {
	ContentType                        string
	GetLogFile200TextPlainBinaryString []byte
	StatusCode                         int64
}
