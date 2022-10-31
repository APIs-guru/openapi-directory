package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchSettingsSearchapplicationsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchSettingsSearchapplicationsGetQueryParams struct {
	DollarXgafv                 *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                 *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                         *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                    *string           `queryParam:"style=form,explode=true,name=callback"`
	DebugOptionsEnableDebugging *bool             `queryParam:"style=form,explode=true,name=debugOptions.enableDebugging"`
	Fields                      *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                         *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                  *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                 *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                   *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                  *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol              *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudsearchSettingsSearchapplicationsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsGetSecurity struct {
	Option1 *CloudsearchSettingsSearchapplicationsGetSecurityOption1 `security:"option"`
	Option2 *CloudsearchSettingsSearchapplicationsGetSecurityOption2 `security:"option"`
	Option3 *CloudsearchSettingsSearchapplicationsGetSecurityOption3 `security:"option"`
}

type CloudsearchSettingsSearchapplicationsGetRequest struct {
	PathParams  CloudsearchSettingsSearchapplicationsGetPathParams
	QueryParams CloudsearchSettingsSearchapplicationsGetQueryParams
	Security    CloudsearchSettingsSearchapplicationsGetSecurity
}

type CloudsearchSettingsSearchapplicationsGetResponse struct {
	ContentType       string
	SearchApplication *shared.SearchApplication
	StatusCode        int64
}
