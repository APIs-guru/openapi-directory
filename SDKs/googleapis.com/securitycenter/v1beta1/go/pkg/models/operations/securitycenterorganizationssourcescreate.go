package operations

import (
	"openapi/pkg/models/shared"
)

type SecuritycenterOrganizationsSourcesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type SecuritycenterOrganizationsSourcesCreateQueryParams struct {
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

type SecuritycenterOrganizationsSourcesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SecuritycenterOrganizationsSourcesCreateRequest struct {
	PathParams  SecuritycenterOrganizationsSourcesCreatePathParams
	QueryParams SecuritycenterOrganizationsSourcesCreateQueryParams
	Request     *shared.Source `request:"mediaType=application/json"`
	Security    SecuritycenterOrganizationsSourcesCreateSecurity
}

type SecuritycenterOrganizationsSourcesCreateResponse struct {
	ContentType string
	Source      *shared.Source
	StatusCode  int64
}
