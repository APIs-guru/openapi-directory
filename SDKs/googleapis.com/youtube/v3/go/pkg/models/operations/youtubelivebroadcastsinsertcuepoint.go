package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeLiveBroadcastsInsertCuepointQueryParams struct {
	DollarXgafv                   *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                   *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                           *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                      *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                        *string           `queryParam:"style=form,explode=true,name=fields"`
	ID                            *string           `queryParam:"style=form,explode=true,name=id"`
	Key                           *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                    *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner        *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	OnBehalfOfContentOwnerChannel *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
	Part                          []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint                   *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                     *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                    *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeLiveBroadcastsInsertCuepointSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveBroadcastsInsertCuepointSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveBroadcastsInsertCuepointSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveBroadcastsInsertCuepointSecurity struct {
	Option1 *YoutubeLiveBroadcastsInsertCuepointSecurityOption1 `security:"option"`
	Option2 *YoutubeLiveBroadcastsInsertCuepointSecurityOption2 `security:"option"`
	Option3 *YoutubeLiveBroadcastsInsertCuepointSecurityOption3 `security:"option"`
}

type YoutubeLiveBroadcastsInsertCuepointRequest struct {
	QueryParams YoutubeLiveBroadcastsInsertCuepointQueryParams
	Request     *shared.Cuepoint `request:"mediaType=application/json"`
	Security    YoutubeLiveBroadcastsInsertCuepointSecurity
}

type YoutubeLiveBroadcastsInsertCuepointResponse struct {
	ContentType string
	Cuepoint    *shared.Cuepoint
	StatusCode  int64
}
