package operations

import (
	"openapi/pkg/models/shared"
)

type RetailProjectsLocationsCatalogsServingConfigsSearchPathParams struct {
	Placement string `pathParam:"style=simple,explode=false,name=placement"`
}

type RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams struct {
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

type RetailProjectsLocationsCatalogsServingConfigsSearchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RetailProjectsLocationsCatalogsServingConfigsSearchRequest struct {
	PathParams  RetailProjectsLocationsCatalogsServingConfigsSearchPathParams
	QueryParams RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams
	Request     *shared.GoogleCloudRetailV2alphaSearchRequest `request:"mediaType=application/json"`
	Security    RetailProjectsLocationsCatalogsServingConfigsSearchSecurity
}

type RetailProjectsLocationsCatalogsServingConfigsSearchResponse struct {
	ContentType                            string
	GoogleCloudRetailV2alphaSearchResponse *shared.GoogleCloudRetailV2alphaSearchResponse
	StatusCode                             int64
}
