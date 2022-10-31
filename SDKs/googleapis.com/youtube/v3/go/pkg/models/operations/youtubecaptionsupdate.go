package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeCaptionsUpdateQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOf             *string           `queryParam:"style=form,explode=true,name=onBehalfOf"`
	OnBehalfOfContentOwner *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	Part                   []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Sync                   *bool             `queryParam:"style=form,explode=true,name=sync"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeCaptionsUpdateRequests struct {
	ApplicationOctetStream []byte `request:"mediaType=application/octet-stream"`
	TextXML                []byte `request:"mediaType=text/xml"`
}

type YoutubeCaptionsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeCaptionsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeCaptionsUpdateSecurity struct {
	Option1 *YoutubeCaptionsUpdateSecurityOption1 `security:"option"`
	Option2 *YoutubeCaptionsUpdateSecurityOption2 `security:"option"`
}

type YoutubeCaptionsUpdateRequest struct {
	QueryParams YoutubeCaptionsUpdateQueryParams
	Request     *YoutubeCaptionsUpdateRequests
	Security    YoutubeCaptionsUpdateSecurity
}

type YoutubeCaptionsUpdateResponse struct {
	Caption     *shared.Caption
	ContentType string
	StatusCode  int64
}
