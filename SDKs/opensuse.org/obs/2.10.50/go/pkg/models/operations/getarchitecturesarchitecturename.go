package operations

import (
	"openapi/pkg/models/shared"
)

type GetArchitecturesArchitectureNamePathParams struct {
	ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
}

type GetArchitecturesArchitectureNameSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetArchitecturesArchitectureNameRequest struct {
	PathParams GetArchitecturesArchitectureNamePathParams
	Security   GetArchitecturesArchitectureNameSecurity
}

type GetArchitecturesArchitectureNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
