package operations

import (
	"openapi/pkg/models/shared"
)

type CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsQueryParams struct {
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

type CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity struct {
	Option1 *CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1 `security:"option"`
	Option2 *CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption2 `security:"option"`
}

type CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest struct {
	PathParams  CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsPathParams
	QueryParams CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsQueryParams
	Request     *shared.TestIamPermissionsRequest `request:"mediaType=application/json"`
	Security    CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity
}

type CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse struct {
	ContentType                string
	StatusCode                 int64
	TestIamPermissionsResponse *shared.TestIamPermissionsResponse
}
