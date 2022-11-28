package operations

import (
	"openapi/pkg/models/shared"
)

type CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateQueryParams struct {
	DollarXgafv           *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken           *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                   *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback              *string           `queryParam:"style=form,explode=true,name=callback"`
	CertificateMapEntryID *string           `queryParam:"style=form,explode=true,name=certificateMapEntryId"`
	Fields                *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                   *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken            *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint           *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser             *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType            *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol        *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest struct {
	PathParams  CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreatePathParams
	QueryParams CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateQueryParams
	Request     *shared.CertificateMapEntryInput `request:"mediaType=application/json"`
	Security    CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity
}

type CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
