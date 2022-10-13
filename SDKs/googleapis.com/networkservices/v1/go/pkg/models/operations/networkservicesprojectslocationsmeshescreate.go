package operations

import (
	"openapi/pkg/models/shared"
)

type NetworkservicesProjectsLocationsMeshesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type NetworkservicesProjectsLocationsMeshesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MeshID         *string           `queryParam:"style=form,explode=true,name=meshId"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type NetworkservicesProjectsLocationsMeshesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type NetworkservicesProjectsLocationsMeshesCreateRequest struct {
	PathParams  NetworkservicesProjectsLocationsMeshesCreatePathParams
	QueryParams NetworkservicesProjectsLocationsMeshesCreateQueryParams
	Request     *shared.Mesh `request:"mediaType=application/json"`
	Security    NetworkservicesProjectsLocationsMeshesCreateSecurity
}

type NetworkservicesProjectsLocationsMeshesCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
