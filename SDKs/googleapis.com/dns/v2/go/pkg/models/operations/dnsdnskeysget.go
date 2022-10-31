package operations

import (
	"openapi/pkg/models/shared"
)

type DNSDNSKeysGetPathParams struct {
	DNSKeyID    string `pathParam:"style=simple,explode=false,name=dnsKeyId"`
	Location    string `pathParam:"style=simple,explode=false,name=location"`
	ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
	Project     string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSDNSKeysGetQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	ClientOperationID *string           `queryParam:"style=form,explode=true,name=clientOperationId"`
	DigestType        *string           `queryParam:"style=form,explode=true,name=digestType"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DNSDNSKeysGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSDNSKeysGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSDNSKeysGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSDNSKeysGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSDNSKeysGetSecurity struct {
	Option1 *DNSDNSKeysGetSecurityOption1 `security:"option"`
	Option2 *DNSDNSKeysGetSecurityOption2 `security:"option"`
	Option3 *DNSDNSKeysGetSecurityOption3 `security:"option"`
	Option4 *DNSDNSKeysGetSecurityOption4 `security:"option"`
}

type DNSDNSKeysGetRequest struct {
	PathParams  DNSDNSKeysGetPathParams
	QueryParams DNSDNSKeysGetQueryParams
	Security    DNSDNSKeysGetSecurity
}

type DNSDNSKeysGetResponse struct {
	ContentType string
	DNSKey      *shared.DNSKey
	StatusCode  int64
}
