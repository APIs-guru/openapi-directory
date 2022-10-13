package operations

import (
	"openapi/pkg/models/shared"
)

type GamesApplicationsGetPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=applicationId"`
}

type GamesApplicationsGetPlatformTypeEnum string

const (
	GamesApplicationsGetPlatformTypeEnumPlatformTypeUnspecified GamesApplicationsGetPlatformTypeEnum = "PLATFORM_TYPE_UNSPECIFIED"
	GamesApplicationsGetPlatformTypeEnumAndroid                 GamesApplicationsGetPlatformTypeEnum = "ANDROID"
	GamesApplicationsGetPlatformTypeEnumIos                     GamesApplicationsGetPlatformTypeEnum = "IOS"
	GamesApplicationsGetPlatformTypeEnumWebApp                  GamesApplicationsGetPlatformTypeEnum = "WEB_APP"
)

type GamesApplicationsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                     `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                               `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                       `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                               `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                               `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                               `queryParam:"style=form,explode=true,name=key"`
	Language       *string                               `queryParam:"style=form,explode=true,name=language"`
	OauthToken     *string                               `queryParam:"style=form,explode=true,name=oauth_token"`
	PlatformType   *GamesApplicationsGetPlatformTypeEnum `queryParam:"style=form,explode=true,name=platformType"`
	PrettyPrint    *bool                                 `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                               `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                               `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                               `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GamesApplicationsGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GamesApplicationsGetRequest struct {
	PathParams  GamesApplicationsGetPathParams
	QueryParams GamesApplicationsGetQueryParams
	Security    GamesApplicationsGetSecurity
}

type GamesApplicationsGetResponse struct {
	Application *shared.Application
	ContentType string
	StatusCode  int64
}
