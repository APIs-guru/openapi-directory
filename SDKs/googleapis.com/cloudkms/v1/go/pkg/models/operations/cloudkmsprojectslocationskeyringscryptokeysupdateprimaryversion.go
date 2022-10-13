package operations

import (
	"openapi/pkg/models/shared"
)

type CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionQueryParams struct {
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

type CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity struct {
	Option1 *CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1 `security:"option"`
	Option2 *CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption2 `security:"option"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest struct {
	PathParams  CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionPathParams
	QueryParams CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionQueryParams
	Request     *shared.UpdateCryptoKeyPrimaryVersionRequest `request:"mediaType=application/json"`
	Security    CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse struct {
	ContentType string
	CryptoKey   *shared.CryptoKey
	StatusCode  int64
}
