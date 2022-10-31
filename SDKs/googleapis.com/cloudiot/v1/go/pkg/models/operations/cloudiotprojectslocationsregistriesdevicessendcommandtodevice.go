package operations

import (
	"openapi/pkg/models/shared"
)

type CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevicePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity struct {
	Option1 *CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1 `security:"option"`
	Option2 *CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption2 `security:"option"`
}

type CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest struct {
	PathParams  CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevicePathParams
	QueryParams CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceQueryParams
	Request     *shared.SendCommandToDeviceRequest `request:"mediaType=application/json"`
	Security    CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity
}

type CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceResponse struct {
	ContentType                 string
	SendCommandToDeviceResponse map[string]interface{}
	StatusCode                  int64
}
