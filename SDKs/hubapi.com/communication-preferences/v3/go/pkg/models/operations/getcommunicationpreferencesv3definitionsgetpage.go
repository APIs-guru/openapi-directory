package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommunicationPreferencesV3DefinitionsGetPageSecurity struct {
	Hapikey            *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy  *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy       *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	PrivateAppsLegacy1 *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy1      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type GetCommunicationPreferencesV3DefinitionsGetPageRequest struct {
	Security GetCommunicationPreferencesV3DefinitionsGetPageSecurity
}

type GetCommunicationPreferencesV3DefinitionsGetPageResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	SubscriptionDefinitionsResponse *shared.SubscriptionDefinitionsResponse
}
