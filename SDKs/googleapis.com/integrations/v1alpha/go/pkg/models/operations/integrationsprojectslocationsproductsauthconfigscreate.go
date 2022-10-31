package operations

import (
"openapi/pkg/models/shared")

type IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ClientCertificateEncryptedPrivateKey *string `queryParam:"style=form,explode=true,name=clientCertificate.encryptedPrivateKey"`
    ClientCertificatePassphrase *string `queryParam:"style=form,explode=true,name=clientCertificate.passphrase"`
    ClientCertificateSslCertificate *string `queryParam:"style=form,explode=true,name=clientCertificate.sslCertificate"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest struct {
    PathParams IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams 
    QueryParams IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams 
    Request *shared.GoogleCloudIntegrationsV1alphaAuthConfig `request:"mediaType=application/json"`
    Security IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity 
    
}

type IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse struct {
    ContentType string 
    GoogleCloudIntegrationsV1alphaAuthConfig *shared.GoogleCloudIntegrationsV1alphaAuthConfig 
    StatusCode int64 
    
}

