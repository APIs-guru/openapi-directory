package operations

import (
	"openapi/pkg/models/shared"
)

type GetFirstUser2Security struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetFirstUser2Request struct {
	Security GetFirstUser2Security
}

type GetFirstUser2Response struct {
	ContentType    string
	StartupUserDto *shared.StartupUserDto
	StatusCode     int64
}
