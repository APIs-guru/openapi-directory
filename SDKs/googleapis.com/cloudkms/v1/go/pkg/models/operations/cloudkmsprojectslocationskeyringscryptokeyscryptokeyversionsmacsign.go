package operations

import (
	"openapi/pkg/models/shared"
)

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignQueryParams struct {
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

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurity struct {
	Option1 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption1 `security:"option"`
	Option2 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption2 `security:"option"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest struct {
	PathParams  CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignPathParams
	QueryParams CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignQueryParams
	Request     *shared.MacSignRequest `request:"mediaType=application/json"`
	Security    CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurity
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignResponse struct {
	ContentType     string
	MacSignResponse *shared.MacSignResponse
	StatusCode      int64
}
