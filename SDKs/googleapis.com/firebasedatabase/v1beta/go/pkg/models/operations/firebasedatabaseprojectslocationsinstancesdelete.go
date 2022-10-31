package operations

import (
	"openapi/pkg/models/shared"
)

type FirebasedatabaseProjectsLocationsInstancesDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams struct {
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

type FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasedatabaseProjectsLocationsInstancesDeleteSecurity struct {
	Option1 *FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1 `security:"option"`
	Option2 *FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2 `security:"option"`
}

type FirebasedatabaseProjectsLocationsInstancesDeleteRequest struct {
	PathParams  FirebasedatabaseProjectsLocationsInstancesDeletePathParams
	QueryParams FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams
	Security    FirebasedatabaseProjectsLocationsInstancesDeleteSecurity
}

type FirebasedatabaseProjectsLocationsInstancesDeleteResponse struct {
	ContentType      string
	DatabaseInstance *shared.DatabaseInstance
	StatusCode       int64
}
