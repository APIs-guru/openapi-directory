package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMediaEncoderPathRequests struct {
	MediaEncoderPathDto  *shared.MediaEncoderPathDto `request:"mediaType=application/*+json"`
	MediaEncoderPathDto1 *shared.MediaEncoderPathDto `request:"mediaType=application/json"`
	MediaEncoderPathDto2 *shared.MediaEncoderPathDto `request:"mediaType=text/json"`
}

type UpdateMediaEncoderPathSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateMediaEncoderPathRequest struct {
	Request  UpdateMediaEncoderPathRequests
	Security UpdateMediaEncoderPathSecurity
}

type UpdateMediaEncoderPathResponse struct {
	ContentType string
	StatusCode  int64
}
