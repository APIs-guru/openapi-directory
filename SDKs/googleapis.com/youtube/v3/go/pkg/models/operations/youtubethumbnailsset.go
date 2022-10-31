package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeThumbnailsSetQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	VideoID                string            `queryParam:"style=form,explode=true,name=videoId"`
}

type YoutubeThumbnailsSetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeThumbnailsSetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeThumbnailsSetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeThumbnailsSetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeThumbnailsSetSecurity struct {
	Option1 *YoutubeThumbnailsSetSecurityOption1 `security:"option"`
	Option2 *YoutubeThumbnailsSetSecurityOption2 `security:"option"`
	Option3 *YoutubeThumbnailsSetSecurityOption3 `security:"option"`
	Option4 *YoutubeThumbnailsSetSecurityOption4 `security:"option"`
}

type YoutubeThumbnailsSetRequest struct {
	QueryParams YoutubeThumbnailsSetQueryParams
	Security    YoutubeThumbnailsSetSecurity
}

type YoutubeThumbnailsSetResponse struct {
	ContentType          string
	StatusCode           int64
	ThumbnailSetResponse *shared.ThumbnailSetResponse
}
