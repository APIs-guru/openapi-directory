package operations

import (
	"openapi/pkg/models/shared"
)

type DriveactivityActivityQueryQueryParams struct {
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

type DriveactivityActivityQuerySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveactivityActivityQuerySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveactivityActivityQuerySecurity struct {
	Option1 *DriveactivityActivityQuerySecurityOption1 `security:"option"`
	Option2 *DriveactivityActivityQuerySecurityOption2 `security:"option"`
}

type DriveactivityActivityQueryRequest struct {
	QueryParams DriveactivityActivityQueryQueryParams
	Request     *shared.QueryDriveActivityRequest `request:"mediaType=application/json"`
	Security    DriveactivityActivityQuerySecurity
}

type DriveactivityActivityQueryResponse struct {
	ContentType                string
	QueryDriveActivityResponse *shared.QueryDriveActivityResponse
	StatusCode                 int64
}
