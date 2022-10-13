package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchSettingsDatasourcesCreateQueryParams struct {
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

type CloudsearchSettingsDatasourcesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsDatasourcesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsDatasourcesCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsDatasourcesCreateSecurity struct {
	Option1 *CloudsearchSettingsDatasourcesCreateSecurityOption1 `security:"option"`
	Option2 *CloudsearchSettingsDatasourcesCreateSecurityOption2 `security:"option"`
	Option3 *CloudsearchSettingsDatasourcesCreateSecurityOption3 `security:"option"`
}

type CloudsearchSettingsDatasourcesCreateRequest struct {
	QueryParams CloudsearchSettingsDatasourcesCreateQueryParams
	Request     *shared.DataSource `request:"mediaType=application/json"`
	Security    CloudsearchSettingsDatasourcesCreateSecurity
}

type CloudsearchSettingsDatasourcesCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
