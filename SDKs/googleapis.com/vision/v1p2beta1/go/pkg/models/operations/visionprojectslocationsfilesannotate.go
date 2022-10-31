package operations

import (
	"openapi/pkg/models/shared"
)

type VisionProjectsLocationsFilesAnnotatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type VisionProjectsLocationsFilesAnnotateQueryParams struct {
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

type VisionProjectsLocationsFilesAnnotateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsFilesAnnotateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsFilesAnnotateSecurity struct {
	Option1 *VisionProjectsLocationsFilesAnnotateSecurityOption1 `security:"option"`
	Option2 *VisionProjectsLocationsFilesAnnotateSecurityOption2 `security:"option"`
}

type VisionProjectsLocationsFilesAnnotateRequest struct {
	PathParams  VisionProjectsLocationsFilesAnnotatePathParams
	QueryParams VisionProjectsLocationsFilesAnnotateQueryParams
	Request     *shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest `request:"mediaType=application/json"`
	Security    VisionProjectsLocationsFilesAnnotateSecurity
}

type VisionProjectsLocationsFilesAnnotateResponse struct {
	ContentType                                          string
	GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse *shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse
	StatusCode                                           int64
}
