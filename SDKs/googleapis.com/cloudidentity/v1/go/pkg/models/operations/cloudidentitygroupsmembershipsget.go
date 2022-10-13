package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsMembershipsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudidentityGroupsMembershipsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadMask       *string           `queryParam:"style=form,explode=true,name=readMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudidentityGroupsMembershipsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsGetSecurity struct {
	Option1 *CloudidentityGroupsMembershipsGetSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsMembershipsGetSecurityOption2 `security:"option"`
	Option3 *CloudidentityGroupsMembershipsGetSecurityOption3 `security:"option"`
}

type CloudidentityGroupsMembershipsGetRequest struct {
	PathParams  CloudidentityGroupsMembershipsGetPathParams
	QueryParams CloudidentityGroupsMembershipsGetQueryParams
	Security    CloudidentityGroupsMembershipsGetSecurity
}

type CloudidentityGroupsMembershipsGetResponse struct {
	ContentType string
	Membership  *shared.Membership
	StatusCode  int64
}
