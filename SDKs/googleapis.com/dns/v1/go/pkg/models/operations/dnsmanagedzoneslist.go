package operations

import (
	"openapi/pkg/models/shared"
)

type DNSManagedZonesListPathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSManagedZonesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	DNSName        *string           `queryParam:"style=form,explode=true,name=dnsName"`
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

type DNSManagedZonesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesListSecurity struct {
	Option1 *DNSManagedZonesListSecurityOption1 `security:"option"`
	Option2 *DNSManagedZonesListSecurityOption2 `security:"option"`
	Option3 *DNSManagedZonesListSecurityOption3 `security:"option"`
	Option4 *DNSManagedZonesListSecurityOption4 `security:"option"`
}

type DNSManagedZonesListRequest struct {
	PathParams  DNSManagedZonesListPathParams
	QueryParams DNSManagedZonesListQueryParams
	Security    DNSManagedZonesListSecurity
}

type DNSManagedZonesListResponse struct {
	ContentType              string
	ManagedZonesListResponse *shared.ManagedZonesListResponse
	StatusCode               int64
}
