package operations

import (
	"openapi/pkg/models/shared"
)

type CloudbillingBillingAccountsTestIamPermissionsPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type CloudbillingBillingAccountsTestIamPermissionsQueryParams struct {
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

type CloudbillingBillingAccountsTestIamPermissionsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingBillingAccountsTestIamPermissionsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingBillingAccountsTestIamPermissionsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingBillingAccountsTestIamPermissionsSecurity struct {
	Option1 *CloudbillingBillingAccountsTestIamPermissionsSecurityOption1 `security:"option"`
	Option2 *CloudbillingBillingAccountsTestIamPermissionsSecurityOption2 `security:"option"`
	Option3 *CloudbillingBillingAccountsTestIamPermissionsSecurityOption3 `security:"option"`
}

type CloudbillingBillingAccountsTestIamPermissionsRequest struct {
	PathParams  CloudbillingBillingAccountsTestIamPermissionsPathParams
	QueryParams CloudbillingBillingAccountsTestIamPermissionsQueryParams
	Request     *shared.TestIamPermissionsRequest `request:"mediaType=application/json"`
	Security    CloudbillingBillingAccountsTestIamPermissionsSecurity
}

type CloudbillingBillingAccountsTestIamPermissionsResponse struct {
	ContentType                string
	StatusCode                 int64
	TestIamPermissionsResponse *shared.TestIamPermissionsResponse
}
