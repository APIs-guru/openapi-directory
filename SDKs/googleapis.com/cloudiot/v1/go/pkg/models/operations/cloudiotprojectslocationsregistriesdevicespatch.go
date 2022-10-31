package operations

import (
	"openapi/pkg/models/shared"
)

type CloudiotProjectsLocationsRegistriesDevicesPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesDevicesPatchSecurity struct {
	Option1 *CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1 `security:"option"`
	Option2 *CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2 `security:"option"`
}

type CloudiotProjectsLocationsRegistriesDevicesPatchRequest struct {
	PathParams  CloudiotProjectsLocationsRegistriesDevicesPatchPathParams
	QueryParams CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams
	Request     *shared.Device `request:"mediaType=application/json"`
	Security    CloudiotProjectsLocationsRegistriesDevicesPatchSecurity
}

type CloudiotProjectsLocationsRegistriesDevicesPatchResponse struct {
	ContentType string
	Device      *shared.Device
	StatusCode  int64
}
