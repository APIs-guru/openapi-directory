package operations

import (
	"openapi/pkg/models/shared"
)

type VisionProjectsLocationsProductsPurgePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type VisionProjectsLocationsProductsPurgeQueryParams struct {
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

type VisionProjectsLocationsProductsPurgeSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductsPurgeSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductsPurgeSecurity struct {
	Option1 *VisionProjectsLocationsProductsPurgeSecurityOption1 `security:"option"`
	Option2 *VisionProjectsLocationsProductsPurgeSecurityOption2 `security:"option"`
}

type VisionProjectsLocationsProductsPurgeRequest struct {
	PathParams  VisionProjectsLocationsProductsPurgePathParams
	QueryParams VisionProjectsLocationsProductsPurgeQueryParams
	Request     *shared.PurgeProductsRequest `request:"mediaType=application/json"`
	Security    VisionProjectsLocationsProductsPurgeSecurity
}

type VisionProjectsLocationsProductsPurgeResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
