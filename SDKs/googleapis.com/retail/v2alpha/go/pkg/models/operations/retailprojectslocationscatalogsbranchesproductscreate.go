package operations

import (
	"openapi/pkg/models/shared"
)

type RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	ProductID      *string           `queryParam:"style=form,explode=true,name=productId"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RetailProjectsLocationsCatalogsBranchesProductsCreateRequest struct {
	PathParams  RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams
	QueryParams RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams
	Request     *shared.GoogleCloudRetailV2alphaProduct `request:"mediaType=application/json"`
	Security    RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity
}

type RetailProjectsLocationsCatalogsBranchesProductsCreateResponse struct {
	ContentType                     string
	GoogleCloudRetailV2alphaProduct *shared.GoogleCloudRetailV2alphaProduct
	StatusCode                      int64
}
