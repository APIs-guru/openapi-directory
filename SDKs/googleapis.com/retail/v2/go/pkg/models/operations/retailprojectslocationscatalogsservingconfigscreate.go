package operations

import (
	"openapi/pkg/models/shared"
)

type RetailProjectsLocationsCatalogsServingConfigsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams struct {
	DollarXgafv     *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields          *string           `queryParam:"style=form,explode=true,name=fields"`
	Key             *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken      *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint     *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ServingConfigID *string           `queryParam:"style=form,explode=true,name=servingConfigId"`
	UploadType      *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type RetailProjectsLocationsCatalogsServingConfigsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RetailProjectsLocationsCatalogsServingConfigsCreateRequest struct {
	PathParams  RetailProjectsLocationsCatalogsServingConfigsCreatePathParams
	QueryParams RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams
	Request     *shared.GoogleCloudRetailV2ServingConfig `request:"mediaType=application/json"`
	Security    RetailProjectsLocationsCatalogsServingConfigsCreateSecurity
}

type RetailProjectsLocationsCatalogsServingConfigsCreateResponse struct {
	ContentType                      string
	GoogleCloudRetailV2ServingConfig *shared.GoogleCloudRetailV2ServingConfig
	StatusCode                       int64
}
