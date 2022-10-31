package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query          *string           `queryParam:"style=form,explode=true,name=query"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity struct {
	Option1 *CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2 `security:"option"`
	Option3 *CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3 `security:"option"`
}

type CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest struct {
	PathParams  CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams
	QueryParams CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams
	Security    CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity
}

type CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse struct {
	CheckTransitiveMembershipResponse *shared.CheckTransitiveMembershipResponse
	ContentType                       string
	StatusCode                        int64
}
