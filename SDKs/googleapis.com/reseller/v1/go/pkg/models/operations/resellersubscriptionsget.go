package operations

import (
	"openapi/pkg/models/shared"
)

type ResellerSubscriptionsGetPathParams struct {
	CustomerID     string `pathParam:"style=simple,explode=false,name=customerId"`
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type ResellerSubscriptionsGetQueryParams struct {
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

type ResellerSubscriptionsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ResellerSubscriptionsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ResellerSubscriptionsGetSecurity struct {
	Option1 *ResellerSubscriptionsGetSecurityOption1 `security:"option"`
	Option2 *ResellerSubscriptionsGetSecurityOption2 `security:"option"`
}

type ResellerSubscriptionsGetRequest struct {
	PathParams  ResellerSubscriptionsGetPathParams
	QueryParams ResellerSubscriptionsGetQueryParams
	Security    ResellerSubscriptionsGetSecurity
}

type ResellerSubscriptionsGetResponse struct {
	ContentType  string
	StatusCode   int64
	Subscription *shared.Subscription
}
