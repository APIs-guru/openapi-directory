package operations

import (
	"openapi/pkg/models/shared"
)

type PubsubProjectsTopicsPublishPathParams struct {
	Topic string `pathParam:"style=simple,explode=false,name=topic"`
}

type PubsubProjectsTopicsPublishQueryParams struct {
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

type PubsubProjectsTopicsPublishSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsTopicsPublishSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsTopicsPublishSecurity struct {
	Option1 *PubsubProjectsTopicsPublishSecurityOption1 `security:"option"`
	Option2 *PubsubProjectsTopicsPublishSecurityOption2 `security:"option"`
}

type PubsubProjectsTopicsPublishRequest struct {
	PathParams  PubsubProjectsTopicsPublishPathParams
	QueryParams PubsubProjectsTopicsPublishQueryParams
	Request     *shared.PublishRequest `request:"mediaType=application/json"`
	Security    PubsubProjectsTopicsPublishSecurity
}

type PubsubProjectsTopicsPublishResponse struct {
	ContentType     string
	PublishResponse *shared.PublishResponse
	StatusCode      int64
}
