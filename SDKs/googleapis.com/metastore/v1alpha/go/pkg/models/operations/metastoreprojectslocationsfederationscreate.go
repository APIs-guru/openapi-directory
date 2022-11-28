package operations

import (
	"openapi/pkg/models/shared"
)

type MetastoreProjectsLocationsFederationsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type MetastoreProjectsLocationsFederationsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	FederationID   *string           `queryParam:"style=form,explode=true,name=federationId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type MetastoreProjectsLocationsFederationsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MetastoreProjectsLocationsFederationsCreateRequest struct {
	PathParams  MetastoreProjectsLocationsFederationsCreatePathParams
	QueryParams MetastoreProjectsLocationsFederationsCreateQueryParams
	Request     *shared.FederationInput `request:"mediaType=application/json"`
	Security    MetastoreProjectsLocationsFederationsCreateSecurity
}

type MetastoreProjectsLocationsFederationsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
