package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams struct {
	EmailAddress string `pathParam:"style=simple,explode=false,name=emailAddress"`
}

type GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity struct {
	Option1 *GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1 `security:"option"`
	Option2 *GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2 `security:"option"`
	Option3 *GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3 `security:"option"`
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
