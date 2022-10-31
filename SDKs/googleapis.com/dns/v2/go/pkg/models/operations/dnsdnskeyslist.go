package operations

import (
	"openapi/pkg/models/shared"
)

type DNSDNSKeysListPathParams struct {
	Location    string `pathParam:"style=simple,explode=false,name=location"`
	ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
	Project     string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSDNSKeysListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	DigestType     *string           `queryParam:"style=form,explode=true,name=digestType"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DNSDNSKeysListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSDNSKeysListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSDNSKeysListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSDNSKeysListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSDNSKeysListSecurity struct {
	Option1 *DNSDNSKeysListSecurityOption1 `security:"option"`
	Option2 *DNSDNSKeysListSecurityOption2 `security:"option"`
	Option3 *DNSDNSKeysListSecurityOption3 `security:"option"`
	Option4 *DNSDNSKeysListSecurityOption4 `security:"option"`
}

type DNSDNSKeysListRequest struct {
	PathParams  DNSDNSKeysListPathParams
	QueryParams DNSDNSKeysListQueryParams
	Security    DNSDNSKeysListSecurity
}

type DNSDNSKeysListResponse struct {
	ContentType         string
	DNSKeysListResponse *shared.DNSKeysListResponse
	StatusCode          int64
}
