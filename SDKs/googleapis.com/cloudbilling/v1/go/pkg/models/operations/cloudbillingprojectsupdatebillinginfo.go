package operations

import (
	"openapi/pkg/models/shared"
)

type CloudbillingProjectsUpdateBillingInfoPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudbillingProjectsUpdateBillingInfoQueryParams struct {
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

type CloudbillingProjectsUpdateBillingInfoSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingProjectsUpdateBillingInfoSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingProjectsUpdateBillingInfoSecurity struct {
	Option1 *CloudbillingProjectsUpdateBillingInfoSecurityOption1 `security:"option"`
	Option2 *CloudbillingProjectsUpdateBillingInfoSecurityOption2 `security:"option"`
}

type CloudbillingProjectsUpdateBillingInfoRequest struct {
	PathParams  CloudbillingProjectsUpdateBillingInfoPathParams
	QueryParams CloudbillingProjectsUpdateBillingInfoQueryParams
	Request     *shared.ProjectBillingInfo `request:"mediaType=application/json"`
	Security    CloudbillingProjectsUpdateBillingInfoSecurity
}

type CloudbillingProjectsUpdateBillingInfoResponse struct {
	ContentType        string
	ProjectBillingInfo *shared.ProjectBillingInfo
	StatusCode         int64
}
