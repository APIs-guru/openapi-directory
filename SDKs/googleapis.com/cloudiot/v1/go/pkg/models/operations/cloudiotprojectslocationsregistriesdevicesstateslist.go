package operations

import (
	"openapi/pkg/models/shared"
)

type CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	NumStates      *int64            `queryParam:"style=form,explode=true,name=numStates"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity struct {
	Option1 *CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1 `security:"option"`
	Option2 *CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2 `security:"option"`
}

type CloudiotProjectsLocationsRegistriesDevicesStatesListRequest struct {
	PathParams  CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams
	QueryParams CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams
	Security    CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity
}

type CloudiotProjectsLocationsRegistriesDevicesStatesListResponse struct {
	ContentType              string
	ListDeviceStatesResponse *shared.ListDeviceStatesResponse
	StatusCode               int64
}
