package operations

import (
	"openapi/pkg/models/shared"
)

type PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchRequest struct {
	PathParams  PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchPathParams
	QueryParams PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchQueryParams
	Request     *shared.CertificateInput `request:"mediaType=application/json"`
	Security    PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchSecurity
}

type PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchResponse struct {
	Certificate *shared.Certificate
	ContentType string
	StatusCode  int64
}
