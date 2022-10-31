package operations

import (
	"openapi/pkg/models/shared"
)

type CloudresourcemanagerProjectsUpdatePathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type CloudresourcemanagerProjectsUpdateQueryParams struct {
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

type CloudresourcemanagerProjectsUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerProjectsUpdateRequest struct {
	PathParams  CloudresourcemanagerProjectsUpdatePathParams
	QueryParams CloudresourcemanagerProjectsUpdateQueryParams
	Request     *shared.Project `request:"mediaType=application/json"`
	Security    CloudresourcemanagerProjectsUpdateSecurity
}

type CloudresourcemanagerProjectsUpdateResponse struct {
	ContentType string
	Project     *shared.Project
	StatusCode  int64
}
