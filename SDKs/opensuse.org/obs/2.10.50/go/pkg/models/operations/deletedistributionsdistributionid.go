package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDistributionsDistributionIDPathParams struct {
	DistributionID int64 `pathParam:"style=simple,explode=false,name=distribution_id"`
}

type DeleteDistributionsDistributionIDSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type DeleteDistributionsDistributionIDRequest struct {
	PathParams DeleteDistributionsDistributionIDPathParams
	Security   DeleteDistributionsDistributionIDSecurity
}

type DeleteDistributionsDistributionIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
