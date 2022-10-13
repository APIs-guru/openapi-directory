package operations

import (
	"openapi/pkg/models/shared"
)

type AllServiceGroupsSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type AllServiceGroupsRequest struct {
	Security AllServiceGroupsSecurity
}

type AllServiceGroupsResponse struct {
	ContentType string
	Groups      []shared.Group
	StatusCode  int64
}
