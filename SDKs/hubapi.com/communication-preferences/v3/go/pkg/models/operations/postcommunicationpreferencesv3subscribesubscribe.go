package operations

import (
	"openapi/pkg/models/shared"
)

type PostCommunicationPreferencesV3SubscribeSubscribeSecurity struct {
	Oauth2Legacy       *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	Hapikey            *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	Oauth2Legacy1      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	PrivateAppsLegacy  *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	PrivateAppsLegacy1 *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
}

type PostCommunicationPreferencesV3SubscribeSubscribeRequest struct {
	Request  shared.PublicUpdateSubscriptionStatusRequest `request:"mediaType=application/json"`
	Security PostCommunicationPreferencesV3SubscribeSubscribeSecurity
}

type PostCommunicationPreferencesV3SubscribeSubscribeResponse struct {
	Body                     []byte
	ContentType              string
	PublicSubscriptionStatus *shared.PublicSubscriptionStatus
	StatusCode               int64
}
