package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetCommunicationPreferencesV3DefinitionsGetPageSecurity struct {
	Option1 *GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1 `security:"option"`
	Option2 *GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2 `security:"option"`
	Option3 *GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3 `security:"option"`
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
