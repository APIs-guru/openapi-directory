package operations

import (
	"openapi/pkg/models/shared"
)

type ProdTtSasportalNodesNodesDeploymentsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ProdTtSasportalNodesNodesDeploymentsCreateQueryParams struct {
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

type ProdTtSasportalNodesNodesDeploymentsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ProdTtSasportalNodesNodesDeploymentsCreateRequest struct {
	PathParams  ProdTtSasportalNodesNodesDeploymentsCreatePathParams
	QueryParams ProdTtSasportalNodesNodesDeploymentsCreateQueryParams
	Request     *shared.SasPortalDeployment `request:"mediaType=application/json"`
	Security    ProdTtSasportalNodesNodesDeploymentsCreateSecurity
}

type ProdTtSasportalNodesNodesDeploymentsCreateResponse struct {
	ContentType         string
	SasPortalDeployment *shared.SasPortalDeployment
	StatusCode          int64
}
