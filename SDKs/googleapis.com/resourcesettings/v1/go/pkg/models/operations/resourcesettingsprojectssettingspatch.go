package operations

import (
	"openapi/pkg/models/shared"
)

type ResourcesettingsProjectsSettingsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ResourcesettingsProjectsSettingsPatchQueryParams struct {
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

type ResourcesettingsProjectsSettingsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ResourcesettingsProjectsSettingsPatchRequest struct {
	PathParams  ResourcesettingsProjectsSettingsPatchPathParams
	QueryParams ResourcesettingsProjectsSettingsPatchQueryParams
	Request     *shared.GoogleCloudResourcesettingsV1Setting `request:"mediaType=application/json"`
	Security    ResourcesettingsProjectsSettingsPatchSecurity
}

type ResourcesettingsProjectsSettingsPatchResponse struct {
	ContentType                          string
	GoogleCloudResourcesettingsV1Setting *shared.GoogleCloudResourcesettingsV1Setting
	StatusCode                           int64
}
