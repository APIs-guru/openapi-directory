package operations

import (
	"openapi/pkg/models/shared"
)

type PostEventsV3SendSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostEventsV3SendRequest struct {
	Request  shared.BehavioralEventHTTPCompletionRequest `request:"mediaType=application/json"`
	Security PostEventsV3SendSecurity
}

type PostEventsV3SendResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
