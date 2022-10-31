package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsMembershipsLookupPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudidentityGroupsMembershipsLookupQueryParams struct {
	DollarXgafv        *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback           *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields             *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                *string           `queryParam:"style=form,explode=true,name=key"`
	MemberKeyID        *string           `queryParam:"style=form,explode=true,name=memberKey.id"`
	MemberKeyNamespace *string           `queryParam:"style=form,explode=true,name=memberKey.namespace"`
	OauthToken         *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType         *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudidentityGroupsMembershipsLookupSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsLookupSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsLookupSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsLookupSecurity struct {
	Option1 *CloudidentityGroupsMembershipsLookupSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsMembershipsLookupSecurityOption2 `security:"option"`
	Option3 *CloudidentityGroupsMembershipsLookupSecurityOption3 `security:"option"`
}

type CloudidentityGroupsMembershipsLookupRequest struct {
	PathParams  CloudidentityGroupsMembershipsLookupPathParams
	QueryParams CloudidentityGroupsMembershipsLookupQueryParams
	Security    CloudidentityGroupsMembershipsLookupSecurity
}

type CloudidentityGroupsMembershipsLookupResponse struct {
	ContentType                  string
	LookupMembershipNameResponse *shared.LookupMembershipNameResponse
	StatusCode                   int64
}
