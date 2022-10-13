package operations

import (
	"openapi/pkg/models/shared"
)

type CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	NumVersions    *int64            `queryParam:"style=form,explode=true,name=numVersions"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurity struct {
	Option1 *CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption1 `security:"option"`
	Option2 *CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption2 `security:"option"`
}

type CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest struct {
	PathParams  CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListPathParams
	QueryParams CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListQueryParams
	Security    CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurity
}

type CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse struct {
	ContentType                      string
	ListDeviceConfigVersionsResponse *shared.ListDeviceConfigVersionsResponse
	StatusCode                       int64
}
