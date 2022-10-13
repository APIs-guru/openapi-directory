package operations

import (
	"openapi/pkg/models/shared"
)

type DNSChangesCreatePathParams struct {
	Location    string `pathParam:"style=simple,explode=false,name=location"`
	ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
	Project     string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSChangesCreateQueryParams struct {
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

type DNSChangesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSChangesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSChangesCreateSecurity struct {
	Option1 *DNSChangesCreateSecurityOption1 `security:"option"`
	Option2 *DNSChangesCreateSecurityOption2 `security:"option"`
}

type DNSChangesCreateRequest struct {
	PathParams  DNSChangesCreatePathParams
	QueryParams DNSChangesCreateQueryParams
	Request     *shared.Change `request:"mediaType=application/json"`
	Security    DNSChangesCreateSecurity
}

type DNSChangesCreateResponse struct {
	Change      *shared.Change
	ContentType string
	StatusCode  int64
}
