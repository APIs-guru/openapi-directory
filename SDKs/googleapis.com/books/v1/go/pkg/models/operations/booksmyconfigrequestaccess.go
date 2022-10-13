package operations

import (
	"openapi/pkg/models/shared"
)

type BooksMyconfigRequestAccessLicenseTypesEnum string

const (
	BooksMyconfigRequestAccessLicenseTypesEnumLicenseTypesUndefined BooksMyconfigRequestAccessLicenseTypesEnum = "LICENSE_TYPES_UNDEFINED"
	BooksMyconfigRequestAccessLicenseTypesEnumBoth                  BooksMyconfigRequestAccessLicenseTypesEnum = "BOTH"
	BooksMyconfigRequestAccessLicenseTypesEnumConcurrent            BooksMyconfigRequestAccessLicenseTypesEnum = "CONCURRENT"
	BooksMyconfigRequestAccessLicenseTypesEnumDownload              BooksMyconfigRequestAccessLicenseTypesEnum = "DOWNLOAD"
)

type BooksMyconfigRequestAccessQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                           `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                     `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                             `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                     `queryParam:"style=form,explode=true,name=callback"`
	Cpksver        string                                      `queryParam:"style=form,explode=true,name=cpksver"`
	Fields         *string                                     `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                     `queryParam:"style=form,explode=true,name=key"`
	LicenseTypes   *BooksMyconfigRequestAccessLicenseTypesEnum `queryParam:"style=form,explode=true,name=licenseTypes"`
	Locale         *string                                     `queryParam:"style=form,explode=true,name=locale"`
	Nonce          string                                      `queryParam:"style=form,explode=true,name=nonce"`
	OauthToken     *string                                     `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                       `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                     `queryParam:"style=form,explode=true,name=quotaUser"`
	Source         string                                      `queryParam:"style=form,explode=true,name=source"`
	UploadType     *string                                     `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                     `queryParam:"style=form,explode=true,name=upload_protocol"`
	VolumeID       string                                      `queryParam:"style=form,explode=true,name=volumeId"`
}

type BooksMyconfigRequestAccessSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksMyconfigRequestAccessRequest struct {
	QueryParams BooksMyconfigRequestAccessQueryParams
	Security    BooksMyconfigRequestAccessSecurity
}

type BooksMyconfigRequestAccessResponse struct {
	ContentType       string
	RequestAccessData *shared.RequestAccessData
	StatusCode        int64
}
