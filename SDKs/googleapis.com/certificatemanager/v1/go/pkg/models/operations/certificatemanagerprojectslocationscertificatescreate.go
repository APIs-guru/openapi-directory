package operations

import (
	"openapi/pkg/models/shared"
)

type CertificatemanagerProjectsLocationsCertificatesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CertificatemanagerProjectsLocationsCertificatesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	CertificateID  *string           `queryParam:"style=form,explode=true,name=certificateId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CertificatemanagerProjectsLocationsCertificatesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CertificatemanagerProjectsLocationsCertificatesCreateRequest struct {
	PathParams  CertificatemanagerProjectsLocationsCertificatesCreatePathParams
	QueryParams CertificatemanagerProjectsLocationsCertificatesCreateQueryParams
	Request     *shared.CertificateInput `request:"mediaType=application/json"`
	Security    CertificatemanagerProjectsLocationsCertificatesCreateSecurity
}

type CertificatemanagerProjectsLocationsCertificatesCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
