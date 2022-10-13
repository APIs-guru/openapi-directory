package operations

import (
	"openapi/pkg/models/shared"
)

type PubsubProjectsTopicsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PubsubProjectsTopicsPatchQueryParams struct {
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

type PubsubProjectsTopicsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsTopicsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsTopicsPatchSecurity struct {
	Option1 *PubsubProjectsTopicsPatchSecurityOption1 `security:"option"`
	Option2 *PubsubProjectsTopicsPatchSecurityOption2 `security:"option"`
}

type PubsubProjectsTopicsPatchRequest struct {
	PathParams  PubsubProjectsTopicsPatchPathParams
	QueryParams PubsubProjectsTopicsPatchQueryParams
	Request     *shared.UpdateTopicRequest `request:"mediaType=application/json"`
	Security    PubsubProjectsTopicsPatchSecurity
}

type PubsubProjectsTopicsPatchResponse struct {
	ContentType string
	StatusCode  int64
	Topic       *shared.Topic
}
