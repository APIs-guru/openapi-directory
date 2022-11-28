package operations

import (
	"openapi/pkg/models/shared"
)

type VisionProjectsLocationsProductSetsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type VisionProjectsLocationsProductSetsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type VisionProjectsLocationsProductSetsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductSetsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VisionProjectsLocationsProductSetsPatchSecurity struct {
	Option1 *VisionProjectsLocationsProductSetsPatchSecurityOption1 `security:"option"`
	Option2 *VisionProjectsLocationsProductSetsPatchSecurityOption2 `security:"option"`
}

type VisionProjectsLocationsProductSetsPatchRequest struct {
	PathParams  VisionProjectsLocationsProductSetsPatchPathParams
	QueryParams VisionProjectsLocationsProductSetsPatchQueryParams
	Request     *shared.ProductSetInput `request:"mediaType=application/json"`
	Security    VisionProjectsLocationsProductSetsPatchSecurity
}

type VisionProjectsLocationsProductSetsPatchResponse struct {
	ContentType string
	ProductSet  *shared.ProductSet
	StatusCode  int64
}
