package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaserulesProjectsRulesetsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirebaserulesProjectsRulesetsGetQueryParams struct {
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

type FirebaserulesProjectsRulesetsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaserulesProjectsRulesetsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaserulesProjectsRulesetsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaserulesProjectsRulesetsGetSecurity struct {
	Option1 *FirebaserulesProjectsRulesetsGetSecurityOption1 `security:"option"`
	Option2 *FirebaserulesProjectsRulesetsGetSecurityOption2 `security:"option"`
	Option3 *FirebaserulesProjectsRulesetsGetSecurityOption3 `security:"option"`
}

type FirebaserulesProjectsRulesetsGetRequest struct {
	PathParams  FirebaserulesProjectsRulesetsGetPathParams
	QueryParams FirebaserulesProjectsRulesetsGetQueryParams
	Security    FirebaserulesProjectsRulesetsGetSecurity
}

type FirebaserulesProjectsRulesetsGetResponse struct {
	ContentType string
	Ruleset     *shared.Ruleset
	StatusCode  int64
}
