package operations

import (
	"openapi/pkg/models/shared"
)

type DiscoverTunersQueryParams struct {
	NewDevicesOnly *bool `queryParam:"style=form,explode=true,name=newDevicesOnly"`
}

type DiscoverTunersSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DiscoverTunersRequest struct {
	QueryParams DiscoverTunersQueryParams
	Security    DiscoverTunersSecurity
}

type DiscoverTunersResponse struct {
	ContentType    string
	StatusCode     int64
	TunerHostInfos []shared.TunerHostInfo
}
