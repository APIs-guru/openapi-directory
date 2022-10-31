package operations

import (
	"openapi/pkg/models/shared"
)

type ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingPathParams struct {
	Customer string `pathParam:"style=simple,explode=false,name=customer"`
}

type ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingQueryParams struct {
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

type ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity struct {
	Option1 *ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1 `security:"option"`
	Option2 *ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption2 `security:"option"`
}

type ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest struct {
	PathParams  ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingPathParams
	QueryParams ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingQueryParams
	Request     *shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest `request:"mediaType=application/json"`
	Security    ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity
}

type ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse struct {
	ContentType                                                   string
	GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse *shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse
	StatusCode                                                    int64
}
