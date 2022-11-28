package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams struct {
	EmailAddress string `pathParam:"style=simple,explode=false,name=emailAddress"`
}

type GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity struct {
	Hapikey            *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy  *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy       *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	PrivateAppsLegacy1 *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy1      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest struct {
	PathParams GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams
	Security   GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity
}

type GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse struct {
	Body                               []byte
	ContentType                        string
	PublicSubscriptionStatusesResponse *shared.PublicSubscriptionStatusesResponse
	StatusCode                         int64
}
