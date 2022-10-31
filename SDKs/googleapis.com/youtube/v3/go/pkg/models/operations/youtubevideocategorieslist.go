package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeVideoCategoriesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Hl             *string           `queryParam:"style=form,explode=true,name=hl"`
	ID             []string          `queryParam:"style=form,explode=true,name=id"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	Part           []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RegionCode     *string           `queryParam:"style=form,explode=true,name=regionCode"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeVideoCategoriesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideoCategoriesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideoCategoriesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideoCategoriesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideoCategoriesListSecurity struct {
	Option1 *YoutubeVideoCategoriesListSecurityOption1 `security:"option"`
	Option2 *YoutubeVideoCategoriesListSecurityOption2 `security:"option"`
	Option3 *YoutubeVideoCategoriesListSecurityOption3 `security:"option"`
	Option4 *YoutubeVideoCategoriesListSecurityOption4 `security:"option"`
}

type YoutubeVideoCategoriesListRequest struct {
	QueryParams YoutubeVideoCategoriesListQueryParams
	Security    YoutubeVideoCategoriesListSecurity
}

type YoutubeVideoCategoriesListResponse struct {
	ContentType               string
	StatusCode                int64
	VideoCategoryListResponse *shared.VideoCategoryListResponse
}
