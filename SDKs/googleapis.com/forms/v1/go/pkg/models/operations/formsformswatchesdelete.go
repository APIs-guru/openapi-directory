package operations

import (
	"openapi/pkg/models/shared"
)

type FormsFormsWatchesDeletePathParams struct {
	FormID  string `pathParam:"style=simple,explode=false,name=formId"`
	WatchID string `pathParam:"style=simple,explode=false,name=watchId"`
}

type FormsFormsWatchesDeleteQueryParams struct {
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

type FormsFormsWatchesDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FormsFormsWatchesDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FormsFormsWatchesDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FormsFormsWatchesDeleteSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FormsFormsWatchesDeleteSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FormsFormsWatchesDeleteSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FormsFormsWatchesDeleteSecurity struct {
	Option1 *FormsFormsWatchesDeleteSecurityOption1 `security:"option"`
	Option2 *FormsFormsWatchesDeleteSecurityOption2 `security:"option"`
	Option3 *FormsFormsWatchesDeleteSecurityOption3 `security:"option"`
	Option4 *FormsFormsWatchesDeleteSecurityOption4 `security:"option"`
	Option5 *FormsFormsWatchesDeleteSecurityOption5 `security:"option"`
	Option6 *FormsFormsWatchesDeleteSecurityOption6 `security:"option"`
}

type FormsFormsWatchesDeleteRequest struct {
	PathParams  FormsFormsWatchesDeletePathParams
	QueryParams FormsFormsWatchesDeleteQueryParams
	Security    FormsFormsWatchesDeleteSecurity
}

type FormsFormsWatchesDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
