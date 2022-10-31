package operations

import (
	"openapi/pkg/models/shared"
)

type PubsubProjectsSubscriptionsPullPathParams struct {
	Subscription string `pathParam:"style=simple,explode=false,name=subscription"`
}

type PubsubProjectsSubscriptionsPullQueryParams struct {
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

type PubsubProjectsSubscriptionsPullSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSubscriptionsPullSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSubscriptionsPullSecurity struct {
	Option1 *PubsubProjectsSubscriptionsPullSecurityOption1 `security:"option"`
	Option2 *PubsubProjectsSubscriptionsPullSecurityOption2 `security:"option"`
}

type PubsubProjectsSubscriptionsPullRequest struct {
	PathParams  PubsubProjectsSubscriptionsPullPathParams
	QueryParams PubsubProjectsSubscriptionsPullQueryParams
	Request     *shared.PullRequest `request:"mediaType=application/json"`
	Security    PubsubProjectsSubscriptionsPullSecurity
}

type PubsubProjectsSubscriptionsPullResponse struct {
	ContentType  string
	PullResponse *shared.PullResponse
	StatusCode   int64
}
