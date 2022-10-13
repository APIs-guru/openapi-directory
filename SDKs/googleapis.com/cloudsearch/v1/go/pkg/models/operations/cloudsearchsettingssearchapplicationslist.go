package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchSettingsSearchapplicationsListQueryParams struct {
	DollarXgafv                 *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                 *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                         *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                    *string           `queryParam:"style=form,explode=true,name=callback"`
	DebugOptionsEnableDebugging *bool             `queryParam:"style=form,explode=true,name=debugOptions.enableDebugging"`
	Fields                      *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                         *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                  *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize                    *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                   *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint                 *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                   *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                  *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol              *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudsearchSettingsSearchapplicationsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsListSecurity struct {
	Option1 *CloudsearchSettingsSearchapplicationsListSecurityOption1 `security:"option"`
	Option2 *CloudsearchSettingsSearchapplicationsListSecurityOption2 `security:"option"`
	Option3 *CloudsearchSettingsSearchapplicationsListSecurityOption3 `security:"option"`
}

type CloudsearchSettingsSearchapplicationsListRequest struct {
	QueryParams CloudsearchSettingsSearchapplicationsListQueryParams
	Security    CloudsearchSettingsSearchapplicationsListSecurity
}

type CloudsearchSettingsSearchapplicationsListResponse struct {
	ContentType                    string
	ListSearchApplicationsResponse *shared.ListSearchApplicationsResponse
	StatusCode                     int64
}
