package operations

import (
	"openapi/pkg/models/shared"
)

type IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams struct {
	DollarXgafv                     *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                     *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                             *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                        *string           `queryParam:"style=form,explode=true,name=callback"`
	ClientCertificatePassphrase     *string           `queryParam:"style=form,explode=true,name=clientCertificate.passphrase"`
	ClientCertificateSslCertificate *string           `queryParam:"style=form,explode=true,name=clientCertificate.sslCertificate"`
	Fields                          *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                             *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                      *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                     *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                       *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask                      *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType                      *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                  *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest struct {
	PathParams  IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams
	QueryParams IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams
	Request     *shared.GoogleCloudIntegrationsV1alphaSfdcChannel `request:"mediaType=application/json"`
	Security    IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity
}

type IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse struct {
	ContentType                               string
	GoogleCloudIntegrationsV1alphaSfdcChannel *shared.GoogleCloudIntegrationsV1alphaSfdcChannel
	StatusCode                                int64
}
