package operations

import (
	"openapi/pkg/models/shared"
)

type CloudkmsProjectsLocationsKeyRingsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudkmsProjectsLocationsKeyRingsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	KeyRingID      *string           `queryParam:"style=form,explode=true,name=keyRingId"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsCreateSecurity struct {
	Option1 *CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1 `security:"option"`
	Option2 *CloudkmsProjectsLocationsKeyRingsCreateSecurityOption2 `security:"option"`
}

type CloudkmsProjectsLocationsKeyRingsCreateRequest struct {
	PathParams  CloudkmsProjectsLocationsKeyRingsCreatePathParams
	QueryParams CloudkmsProjectsLocationsKeyRingsCreateQueryParams
	Request     *shared.KeyRing `request:"mediaType=application/json"`
	Security    CloudkmsProjectsLocationsKeyRingsCreateSecurity
}

type CloudkmsProjectsLocationsKeyRingsCreateResponse struct {
	ContentType string
	KeyRing     *shared.KeyRing
	StatusCode  int64
}
