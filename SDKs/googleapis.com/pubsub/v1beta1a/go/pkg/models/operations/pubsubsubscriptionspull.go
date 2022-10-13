package operations

import (
	"openapi/pkg/models/shared"
)

type PubsubSubscriptionsPullQueryParams struct {
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

type PubsubSubscriptionsPullSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubSubscriptionsPullSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubSubscriptionsPullSecurity struct {
	Option1 *PubsubSubscriptionsPullSecurityOption1 `security:"option"`
	Option2 *PubsubSubscriptionsPullSecurityOption2 `security:"option"`
}

type PubsubSubscriptionsPullRequest struct {
	QueryParams PubsubSubscriptionsPullQueryParams
	Request     *shared.PullRequest `request:"mediaType=application/json"`
	Security    PubsubSubscriptionsPullSecurity
}

type PubsubSubscriptionsPullResponse struct {
	ContentType  string
	PullResponse *shared.PullResponse
	StatusCode   int64
}
