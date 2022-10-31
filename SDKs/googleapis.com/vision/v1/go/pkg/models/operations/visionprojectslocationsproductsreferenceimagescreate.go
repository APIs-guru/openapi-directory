package operations

import (
	"openapi/pkg/models/shared"
)

type VisionProjectsLocationsProductsReferenceImagesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type VisionProjectsLocationsProductsReferenceImagesCreateQueryParams struct {
	DollarXgafv      *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback         *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields           *string           `queryParam:"style=form,explode=true,name=fields"`
	Key              *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken       *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint      *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ReferenceImageID *string           `queryParam:"style=form,explode=true,name=referenceImageId"`
	UploadType       *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductsReferenceImagesCreateSecurity struct {
	Option1 *VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1 `security:"option"`
	Option2 *VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2 `security:"option"`
}

type VisionProjectsLocationsProductsReferenceImagesCreateRequest struct {
	PathParams  VisionProjectsLocationsProductsReferenceImagesCreatePathParams
	QueryParams VisionProjectsLocationsProductsReferenceImagesCreateQueryParams
	Request     *shared.ReferenceImage `request:"mediaType=application/json"`
	Security    VisionProjectsLocationsProductsReferenceImagesCreateSecurity
}

type VisionProjectsLocationsProductsReferenceImagesCreateResponse struct {
	ContentType    string
	ReferenceImage *shared.ReferenceImage
	StatusCode     int64
}
