package operations

import (
	"openapi/pkg/models/shared"
)

type OsconfigProjectsPatchDeploymentsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type OsconfigProjectsPatchDeploymentsCreateQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PatchDeploymentID *string           `queryParam:"style=form,explode=true,name=patchDeploymentId"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type OsconfigProjectsPatchDeploymentsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type OsconfigProjectsPatchDeploymentsCreateRequest struct {
	PathParams  OsconfigProjectsPatchDeploymentsCreatePathParams
	QueryParams OsconfigProjectsPatchDeploymentsCreateQueryParams
	Request     *shared.PatchDeployment `request:"mediaType=application/json"`
	Security    OsconfigProjectsPatchDeploymentsCreateSecurity
}

type OsconfigProjectsPatchDeploymentsCreateResponse struct {
	ContentType     string
	PatchDeployment *shared.PatchDeployment
	StatusCode      int64
}
