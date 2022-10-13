package operations

import (
	"openapi/pkg/models/shared"
)

type VisionProjectsLocationsProductSetsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type VisionProjectsLocationsProductSetsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	ProductSetID   *string           `queryParam:"style=form,explode=true,name=productSetId"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type VisionProjectsLocationsProductSetsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductSetsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductSetsCreateSecurity struct {
	Option1 *VisionProjectsLocationsProductSetsCreateSecurityOption1 `security:"option"`
	Option2 *VisionProjectsLocationsProductSetsCreateSecurityOption2 `security:"option"`
}

type VisionProjectsLocationsProductSetsCreateRequest struct {
	PathParams  VisionProjectsLocationsProductSetsCreatePathParams
	QueryParams VisionProjectsLocationsProductSetsCreateQueryParams
	Request     *shared.ProductSet `request:"mediaType=application/json"`
	Security    VisionProjectsLocationsProductSetsCreateSecurity
}

type VisionProjectsLocationsProductSetsCreateResponse struct {
	ContentType string
	ProductSet  *shared.ProductSet
	StatusCode  int64
}
