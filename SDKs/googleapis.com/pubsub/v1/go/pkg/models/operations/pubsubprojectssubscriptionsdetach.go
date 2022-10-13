package operations

import (
	"openapi/pkg/models/shared"
)

type PubsubProjectsSubscriptionsDetachPathParams struct {
	Subscription string `pathParam:"style=simple,explode=false,name=subscription"`
}

type PubsubProjectsSubscriptionsDetachQueryParams struct {
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

type PubsubProjectsSubscriptionsDetachSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSubscriptionsDetachSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSubscriptionsDetachSecurity struct {
	Option1 *PubsubProjectsSubscriptionsDetachSecurityOption1 `security:"option"`
	Option2 *PubsubProjectsSubscriptionsDetachSecurityOption2 `security:"option"`
}

type PubsubProjectsSubscriptionsDetachRequest struct {
	PathParams  PubsubProjectsSubscriptionsDetachPathParams
	QueryParams PubsubProjectsSubscriptionsDetachQueryParams
	Security    PubsubProjectsSubscriptionsDetachSecurity
}

type PubsubProjectsSubscriptionsDetachResponse struct {
	ContentType                string
	DetachSubscriptionResponse map[string]interface{}
	StatusCode                 int64
}
