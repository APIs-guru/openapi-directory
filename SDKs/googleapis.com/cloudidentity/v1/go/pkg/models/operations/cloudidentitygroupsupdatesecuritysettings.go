package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsUpdateSecuritySettingsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudidentityGroupsUpdateSecuritySettingsQueryParams struct {
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

type CloudidentityGroupsUpdateSecuritySettingsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsUpdateSecuritySettingsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsUpdateSecuritySettingsSecurity struct {
	Option1 *CloudidentityGroupsUpdateSecuritySettingsSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsUpdateSecuritySettingsSecurityOption2 `security:"option"`
}

type CloudidentityGroupsUpdateSecuritySettingsRequest struct {
	PathParams  CloudidentityGroupsUpdateSecuritySettingsPathParams
	QueryParams CloudidentityGroupsUpdateSecuritySettingsQueryParams
	Request     *shared.SecuritySettings `request:"mediaType=application/json"`
	Security    CloudidentityGroupsUpdateSecuritySettingsSecurity
}

type CloudidentityGroupsUpdateSecuritySettingsResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
