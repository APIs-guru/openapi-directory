package operations

import (
	"openapi/pkg/models/shared"
)

type SetChannelMappingRequests struct {
	SetChannelMappingDto  *shared.SetChannelMappingDto `request:"mediaType=application/*+json"`
	SetChannelMappingDto1 *shared.SetChannelMappingDto `request:"mediaType=application/json"`
	SetChannelMappingDto2 *shared.SetChannelMappingDto `request:"mediaType=text/json"`
}

type SetChannelMappingSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SetChannelMappingRequest struct {
	Request  SetChannelMappingRequests
	Security SetChannelMappingSecurity
}

type SetChannelMappingResponse struct {
	ContentType         string
	StatusCode          int64
	TunerChannelMapping *shared.TunerChannelMapping
}
