package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsMembershipsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudidentityGroupsMembershipsCreateQueryParams struct {
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

type CloudidentityGroupsMembershipsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsCreateSecurity struct {
	Option1 *CloudidentityGroupsMembershipsCreateSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsMembershipsCreateSecurityOption2 `security:"option"`
}

type CloudidentityGroupsMembershipsCreateRequest struct {
	PathParams  CloudidentityGroupsMembershipsCreatePathParams
	QueryParams CloudidentityGroupsMembershipsCreateQueryParams
	Request     *shared.MembershipInput `request:"mediaType=application/json"`
	Security    CloudidentityGroupsMembershipsCreateSecurity
}

type CloudidentityGroupsMembershipsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
