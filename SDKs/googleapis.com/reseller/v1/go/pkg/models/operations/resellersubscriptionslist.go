package operations

import (
	"openapi/pkg/models/shared"
)

type ResellerSubscriptionsListQueryParams struct {
	DollarXgafv        *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback           *string           `queryParam:"style=form,explode=true,name=callback"`
	CustomerAuthToken  *string           `queryParam:"style=form,explode=true,name=customerAuthToken"`
	CustomerID         *string           `queryParam:"style=form,explode=true,name=customerId"`
	CustomerNamePrefix *string           `queryParam:"style=form,explode=true,name=customerNamePrefix"`
	Fields             *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults         *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken         *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken          *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint        *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType         *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ResellerSubscriptionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ResellerSubscriptionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ResellerSubscriptionsListSecurity struct {
	Option1 *ResellerSubscriptionsListSecurityOption1 `security:"option"`
	Option2 *ResellerSubscriptionsListSecurityOption2 `security:"option"`
}

type ResellerSubscriptionsListRequest struct {
	QueryParams ResellerSubscriptionsListQueryParams
	Security    ResellerSubscriptionsListSecurity
}

type ResellerSubscriptionsListResponse struct {
	ContentType   string
	StatusCode    int64
	Subscriptions *shared.Subscriptions
}
