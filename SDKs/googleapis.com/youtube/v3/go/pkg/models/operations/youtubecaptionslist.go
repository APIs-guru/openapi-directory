package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeCaptionsListQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	ID                     []string          `queryParam:"style=form,explode=true,name=id"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOf             *string           `queryParam:"style=form,explode=true,name=onBehalfOf"`
	OnBehalfOfContentOwner *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	Part                   []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	VideoID                string            `queryParam:"style=form,explode=true,name=videoId"`
}

type YoutubeCaptionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeCaptionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeCaptionsListSecurity struct {
	Option1 *YoutubeCaptionsListSecurityOption1 `security:"option"`
	Option2 *YoutubeCaptionsListSecurityOption2 `security:"option"`
}

type YoutubeCaptionsListRequest struct {
	QueryParams YoutubeCaptionsListQueryParams
	Security    YoutubeCaptionsListSecurity
}

type YoutubeCaptionsListResponse struct {
	CaptionListResponse *shared.CaptionListResponse
	ContentType         string
	StatusCode          int64
}
