package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchSettingsSearchapplicationsResetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchSettingsSearchapplicationsResetQueryParams struct {
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

type CloudsearchSettingsSearchapplicationsResetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsResetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsResetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsResetSecurity struct {
	Option1 *CloudsearchSettingsSearchapplicationsResetSecurityOption1 `security:"option"`
	Option2 *CloudsearchSettingsSearchapplicationsResetSecurityOption2 `security:"option"`
	Option3 *CloudsearchSettingsSearchapplicationsResetSecurityOption3 `security:"option"`
}

type CloudsearchSettingsSearchapplicationsResetRequest struct {
	PathParams  CloudsearchSettingsSearchapplicationsResetPathParams
	QueryParams CloudsearchSettingsSearchapplicationsResetQueryParams
	Request     *shared.ResetSearchApplicationRequest `request:"mediaType=application/json"`
	Security    CloudsearchSettingsSearchapplicationsResetSecurity
}

type CloudsearchSettingsSearchapplicationsResetResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
