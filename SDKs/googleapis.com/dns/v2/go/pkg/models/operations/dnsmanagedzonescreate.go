package operations

import (
	"openapi/pkg/models/shared"
)

type DNSManagedZonesCreatePathParams struct {
	Location string `pathParam:"style=simple,explode=false,name=location"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSManagedZonesCreateQueryParams struct {
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

type DNSManagedZonesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesCreateSecurity struct {
	Option1 *DNSManagedZonesCreateSecurityOption1 `security:"option"`
	Option2 *DNSManagedZonesCreateSecurityOption2 `security:"option"`
}

type DNSManagedZonesCreateRequest struct {
	PathParams  DNSManagedZonesCreatePathParams
	QueryParams DNSManagedZonesCreateQueryParams
	Request     *shared.ManagedZone `request:"mediaType=application/json"`
	Security    DNSManagedZonesCreateSecurity
}

type DNSManagedZonesCreateResponse struct {
	ContentType string
	ManagedZone *shared.ManagedZone
	StatusCode  int64
}
