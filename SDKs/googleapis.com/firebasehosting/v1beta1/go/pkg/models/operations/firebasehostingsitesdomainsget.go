package operations

import (
	"openapi/pkg/models/shared"
)

type FirebasehostingSitesDomainsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirebasehostingSitesDomainsGetQueryParams struct {
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

type FirebasehostingSitesDomainsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasehostingSitesDomainsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasehostingSitesDomainsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasehostingSitesDomainsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasehostingSitesDomainsGetSecurity struct {
	Option1 *FirebasehostingSitesDomainsGetSecurityOption1 `security:"option"`
	Option2 *FirebasehostingSitesDomainsGetSecurityOption2 `security:"option"`
	Option3 *FirebasehostingSitesDomainsGetSecurityOption3 `security:"option"`
	Option4 *FirebasehostingSitesDomainsGetSecurityOption4 `security:"option"`
}

type FirebasehostingSitesDomainsGetRequest struct {
	PathParams  FirebasehostingSitesDomainsGetPathParams
	QueryParams FirebasehostingSitesDomainsGetQueryParams
	Security    FirebasehostingSitesDomainsGetSecurity
}

type FirebasehostingSitesDomainsGetResponse struct {
	ContentType string
	Domain      *shared.Domain
	StatusCode  int64
}
