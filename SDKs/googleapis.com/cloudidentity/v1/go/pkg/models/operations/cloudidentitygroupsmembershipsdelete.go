package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsMembershipsDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudidentityGroupsMembershipsDeleteQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Customer       *string           `queryParam:"style=form,explode=true,name=customer"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudidentityGroupsMembershipsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsDeleteSecurity struct {
	Option1 *CloudidentityGroupsMembershipsDeleteSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsMembershipsDeleteSecurityOption2 `security:"option"`
}

type CloudidentityGroupsMembershipsDeleteRequest struct {
	PathParams  CloudidentityGroupsMembershipsDeletePathParams
	QueryParams CloudidentityGroupsMembershipsDeleteQueryParams
	Security    CloudidentityGroupsMembershipsDeleteSecurity
}

type CloudidentityGroupsMembershipsDeleteResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
