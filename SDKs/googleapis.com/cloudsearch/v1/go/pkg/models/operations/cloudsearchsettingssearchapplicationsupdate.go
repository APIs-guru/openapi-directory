package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchSettingsSearchapplicationsUpdatePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchSettingsSearchapplicationsUpdateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudsearchSettingsSearchapplicationsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsUpdateSecurity struct {
	Option1 *CloudsearchSettingsSearchapplicationsUpdateSecurityOption1 `security:"option"`
	Option2 *CloudsearchSettingsSearchapplicationsUpdateSecurityOption2 `security:"option"`
	Option3 *CloudsearchSettingsSearchapplicationsUpdateSecurityOption3 `security:"option"`
}

type CloudsearchSettingsSearchapplicationsUpdateRequest struct {
	PathParams  CloudsearchSettingsSearchapplicationsUpdatePathParams
	QueryParams CloudsearchSettingsSearchapplicationsUpdateQueryParams
	Request     *shared.SearchApplicationInput `request:"mediaType=application/json"`
	Security    CloudsearchSettingsSearchapplicationsUpdateSecurity
}

type CloudsearchSettingsSearchapplicationsUpdateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
