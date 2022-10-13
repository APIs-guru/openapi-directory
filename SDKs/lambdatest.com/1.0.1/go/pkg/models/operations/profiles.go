package operations

import (
	"openapi/pkg/models/shared"
)

type ProfilesSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type ProfilesRequest struct {
	Security ProfilesSecurity
}

type ProfilesResponse struct {
	AccessDenied *interface{}
	ContentType  string
	StatusCode   int64
	Profiles     *shared.Profiles
}
