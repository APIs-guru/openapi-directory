package operations

import (
	"openapi/pkg/models/shared"
)

type ScriptScriptsRunPathParams struct {
	ScriptID string `pathParam:"style=simple,explode=false,name=scriptId"`
}

type ScriptScriptsRunQueryParams struct {
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

type ScriptScriptsRunSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption8 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption9 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption10 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption11 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurityOption12 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptScriptsRunSecurity struct {
	Option1  *ScriptScriptsRunSecurityOption1  `security:"option"`
	Option2  *ScriptScriptsRunSecurityOption2  `security:"option"`
	Option3  *ScriptScriptsRunSecurityOption3  `security:"option"`
	Option4  *ScriptScriptsRunSecurityOption4  `security:"option"`
	Option5  *ScriptScriptsRunSecurityOption5  `security:"option"`
	Option6  *ScriptScriptsRunSecurityOption6  `security:"option"`
	Option7  *ScriptScriptsRunSecurityOption7  `security:"option"`
	Option8  *ScriptScriptsRunSecurityOption8  `security:"option"`
	Option9  *ScriptScriptsRunSecurityOption9  `security:"option"`
	Option10 *ScriptScriptsRunSecurityOption10 `security:"option"`
	Option11 *ScriptScriptsRunSecurityOption11 `security:"option"`
	Option12 *ScriptScriptsRunSecurityOption12 `security:"option"`
}

type ScriptScriptsRunRequest struct {
	PathParams  ScriptScriptsRunPathParams
	QueryParams ScriptScriptsRunQueryParams
	Request     *shared.ExecutionRequest `request:"mediaType=application/json"`
	Security    ScriptScriptsRunSecurity
}

type ScriptScriptsRunResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
