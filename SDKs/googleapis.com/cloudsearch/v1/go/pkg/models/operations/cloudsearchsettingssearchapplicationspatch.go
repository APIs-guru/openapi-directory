package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchSettingsSearchapplicationsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchSettingsSearchapplicationsPatchQueryParams struct {
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

type CloudsearchSettingsSearchapplicationsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsPatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchSettingsSearchapplicationsPatchSecurity struct {
	Option1 *CloudsearchSettingsSearchapplicationsPatchSecurityOption1 `security:"option"`
	Option2 *CloudsearchSettingsSearchapplicationsPatchSecurityOption2 `security:"option"`
	Option3 *CloudsearchSettingsSearchapplicationsPatchSecurityOption3 `security:"option"`
}

type CloudsearchSettingsSearchapplicationsPatchRequest struct {
	PathParams  CloudsearchSettingsSearchapplicationsPatchPathParams
	QueryParams CloudsearchSettingsSearchapplicationsPatchQueryParams
	Request     *shared.SearchApplicationInput `request:"mediaType=application/json"`
	Security    CloudsearchSettingsSearchapplicationsPatchSecurity
}

type CloudsearchSettingsSearchapplicationsPatchResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
