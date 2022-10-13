package operations

import (
	"openapi/pkg/models/shared"
)

type FirebasedatabaseProjectsLocationsInstancesUndeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams struct {
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

type FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity struct {
	Option1 *FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1 `security:"option"`
	Option2 *FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2 `security:"option"`
}

type FirebasedatabaseProjectsLocationsInstancesUndeleteRequest struct {
	PathParams  FirebasedatabaseProjectsLocationsInstancesUndeletePathParams
	QueryParams FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
	Security    FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity
}

type FirebasedatabaseProjectsLocationsInstancesUndeleteResponse struct {
	ContentType      string
	DatabaseInstance *shared.DatabaseInstance
	StatusCode       int64
}
