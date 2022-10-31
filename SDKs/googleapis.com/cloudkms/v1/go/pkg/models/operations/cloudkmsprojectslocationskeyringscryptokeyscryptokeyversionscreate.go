package operations

import (
"openapi/pkg/models/shared")

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity struct {
    Option1 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1 `security:"option"`
    Option2 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2 `security:"option"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest struct {
    PathParams CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams 
    QueryParams CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams 
    Request *shared.CryptoKeyVersion `request:"mediaType=application/json"`
    Security CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity 
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse struct {
    ContentType string 
    CryptoKeyVersion *shared.CryptoKeyVersion 
    StatusCode int64 
    
}

