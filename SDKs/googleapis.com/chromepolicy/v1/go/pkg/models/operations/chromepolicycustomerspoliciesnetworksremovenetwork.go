package operations

import (
	"openapi/pkg/models/shared"
)

type ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams struct {
	Customer string `pathParam:"style=simple,explode=false,name=customer"`
}

type ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams struct {
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

type ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest struct {
	PathParams  ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams
	QueryParams ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams
	Request     *shared.GoogleChromePolicyV1RemoveNetworkRequest `request:"mediaType=application/json"`
	Security    ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity
}

type ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse struct {
	ContentType                               string
	GoogleChromePolicyV1RemoveNetworkResponse map[string]interface{}
	StatusCode                                int64
}
