package operations

import (
	"openapi/pkg/models/shared"
)

type SQLProjectsInstancesVerifyExternalSyncSettingsPathParams struct {
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type SQLProjectsInstancesVerifyExternalSyncSettingsQueryParams struct {
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

type SQLProjectsInstancesVerifyExternalSyncSettingsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLProjectsInstancesVerifyExternalSyncSettingsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLProjectsInstancesVerifyExternalSyncSettingsSecurity struct {
	Option1 *SQLProjectsInstancesVerifyExternalSyncSettingsSecurityOption1 `security:"option"`
	Option2 *SQLProjectsInstancesVerifyExternalSyncSettingsSecurityOption2 `security:"option"`
}

type SQLProjectsInstancesVerifyExternalSyncSettingsRequest struct {
	PathParams  SQLProjectsInstancesVerifyExternalSyncSettingsPathParams
	QueryParams SQLProjectsInstancesVerifyExternalSyncSettingsQueryParams
	Request     *shared.SQLInstancesVerifyExternalSyncSettingsRequest `request:"mediaType=application/json"`
	Security    SQLProjectsInstancesVerifyExternalSyncSettingsSecurity
}

type SQLProjectsInstancesVerifyExternalSyncSettingsResponse struct {
	ContentType                                    string
	SQLInstancesVerifyExternalSyncSettingsResponse *shared.SQLInstancesVerifyExternalSyncSettingsResponse
	StatusCode                                     int64
}
