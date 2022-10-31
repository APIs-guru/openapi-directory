package operations

import (
	"openapi/pkg/models/shared"
)

type DNSManagedZonesTestIamPermissionsPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type DNSManagedZonesTestIamPermissionsQueryParams struct {
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

type DNSManagedZonesTestIamPermissionsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesTestIamPermissionsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesTestIamPermissionsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesTestIamPermissionsSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesTestIamPermissionsSecurity struct {
	Option1 *DNSManagedZonesTestIamPermissionsSecurityOption1 `security:"option"`
	Option2 *DNSManagedZonesTestIamPermissionsSecurityOption2 `security:"option"`
	Option3 *DNSManagedZonesTestIamPermissionsSecurityOption3 `security:"option"`
	Option4 *DNSManagedZonesTestIamPermissionsSecurityOption4 `security:"option"`
}

type DNSManagedZonesTestIamPermissionsRequest struct {
	PathParams  DNSManagedZonesTestIamPermissionsPathParams
	QueryParams DNSManagedZonesTestIamPermissionsQueryParams
	Request     *shared.GoogleIamV1TestIamPermissionsRequest `request:"mediaType=application/json"`
	Security    DNSManagedZonesTestIamPermissionsSecurity
}

type DNSManagedZonesTestIamPermissionsResponse struct {
	ContentType                           string
	GoogleIamV1TestIamPermissionsResponse *shared.GoogleIamV1TestIamPermissionsResponse
	StatusCode                            int64
}
