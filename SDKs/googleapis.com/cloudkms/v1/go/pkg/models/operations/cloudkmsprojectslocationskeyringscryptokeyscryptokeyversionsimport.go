package operations

import (
	"openapi/pkg/models/shared"
)

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportQueryParams struct {
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

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurity struct {
	Option1 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption1 `security:"option"`
	Option2 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption2 `security:"option"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest struct {
	PathParams  CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportPathParams
	QueryParams CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportQueryParams
	Request     *shared.ImportCryptoKeyVersionRequest `request:"mediaType=application/json"`
	Security    CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurity
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse struct {
	ContentType      string
	CryptoKeyVersion *shared.CryptoKeyVersion
	StatusCode       int64
}
