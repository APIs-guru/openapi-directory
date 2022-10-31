package operations

import (
	"openapi/pkg/models/shared"
)

type VisionProjectsLocationsProductsReferenceImagesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type VisionProjectsLocationsProductsReferenceImagesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type VisionProjectsLocationsProductsReferenceImagesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductsReferenceImagesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductsReferenceImagesListSecurity struct {
	Option1 *VisionProjectsLocationsProductsReferenceImagesListSecurityOption1 `security:"option"`
	Option2 *VisionProjectsLocationsProductsReferenceImagesListSecurityOption2 `security:"option"`
}

type VisionProjectsLocationsProductsReferenceImagesListRequest struct {
	PathParams  VisionProjectsLocationsProductsReferenceImagesListPathParams
	QueryParams VisionProjectsLocationsProductsReferenceImagesListQueryParams
	Security    VisionProjectsLocationsProductsReferenceImagesListSecurity
}

type VisionProjectsLocationsProductsReferenceImagesListResponse struct {
	ContentType                 string
	ListReferenceImagesResponse *shared.ListReferenceImagesResponse
	StatusCode                  int64
}
