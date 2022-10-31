package operations

import (
	"openapi/pkg/models/shared"
)

type DNSManagedZonesGetPathParams struct {
	ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
	Project     string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSManagedZonesGetQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	ClientOperationID *string           `queryParam:"style=form,explode=true,name=clientOperationId"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DNSManagedZonesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesGetSecurity struct {
	Option1 *DNSManagedZonesGetSecurityOption1 `security:"option"`
	Option2 *DNSManagedZonesGetSecurityOption2 `security:"option"`
	Option3 *DNSManagedZonesGetSecurityOption3 `security:"option"`
	Option4 *DNSManagedZonesGetSecurityOption4 `security:"option"`
}

type DNSManagedZonesGetRequest struct {
	PathParams  DNSManagedZonesGetPathParams
	QueryParams DNSManagedZonesGetQueryParams
	Security    DNSManagedZonesGetSecurity
}

type DNSManagedZonesGetResponse struct {
	ContentType string
	ManagedZone *shared.ManagedZone
	StatusCode  int64
}
