package operations

import (
	"openapi/pkg/models/shared"
)

type VisionProjectsLocationsProductSetsRemoveProductPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type VisionProjectsLocationsProductSetsRemoveProductQueryParams struct {
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

type VisionProjectsLocationsProductSetsRemoveProductSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductSetsRemoveProductSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductSetsRemoveProductSecurity struct {
	Option1 *VisionProjectsLocationsProductSetsRemoveProductSecurityOption1 `security:"option"`
	Option2 *VisionProjectsLocationsProductSetsRemoveProductSecurityOption2 `security:"option"`
}

type VisionProjectsLocationsProductSetsRemoveProductRequest struct {
	PathParams  VisionProjectsLocationsProductSetsRemoveProductPathParams
	QueryParams VisionProjectsLocationsProductSetsRemoveProductQueryParams
	Request     *shared.RemoveProductFromProductSetRequest `request:"mediaType=application/json"`
	Security    VisionProjectsLocationsProductSetsRemoveProductSecurity
}

type VisionProjectsLocationsProductSetsRemoveProductResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
