package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsSQLValidatePathParams struct {
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsSQLValidateQueryParams struct {
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

type DataflowProjectsLocationsSQLValidateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsSQLValidateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsSQLValidateSecurity struct {
	Option1 *DataflowProjectsLocationsSQLValidateSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsSQLValidateSecurityOption2 `security:"option"`
}

type DataflowProjectsLocationsSQLValidateRequest struct {
	PathParams  DataflowProjectsLocationsSQLValidatePathParams
	QueryParams DataflowProjectsLocationsSQLValidateQueryParams
	Security    DataflowProjectsLocationsSQLValidateSecurity
}

type DataflowProjectsLocationsSQLValidateResponse struct {
	ContentType      string
	StatusCode       int64
	ValidateResponse *shared.ValidateResponse
}
