package operations

import (
	"openapi/pkg/models/shared"
)

type DigitalassetlinksAssetlinksCheckQueryParams struct {
	DollarXgafv                                  *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                                  *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                                          *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                                     *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                                       *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                                          *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                                   *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                                  *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                                    *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Relation                                     *string           `queryParam:"style=form,explode=true,name=relation"`
	SourceAndroidAppCertificateSha256Fingerprint *string           `queryParam:"style=form,explode=true,name=source.androidApp.certificate.sha256Fingerprint"`
	SourceAndroidAppPackageName                  *string           `queryParam:"style=form,explode=true,name=source.androidApp.packageName"`
	SourceWebSite                                *string           `queryParam:"style=form,explode=true,name=source.web.site"`
	TargetAndroidAppCertificateSha256Fingerprint *string           `queryParam:"style=form,explode=true,name=target.androidApp.certificate.sha256Fingerprint"`
	TargetAndroidAppPackageName                  *string           `queryParam:"style=form,explode=true,name=target.androidApp.packageName"`
	TargetWebSite                                *string           `queryParam:"style=form,explode=true,name=target.web.site"`
	UploadType                                   *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                               *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DigitalassetlinksAssetlinksCheckRequest struct {
	QueryParams DigitalassetlinksAssetlinksCheckQueryParams
}

type DigitalassetlinksAssetlinksCheckResponse struct {
	CheckResponse *shared.CheckResponse
	ContentType   string
	StatusCode    int64
}
