package operations

import (
"openapi/pkg/models/shared")

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CryptoKeyID *string `queryParam:"style=form,explode=true,name=cryptoKeyId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SkipInitialVersionCreation *bool `queryParam:"style=form,explode=true,name=skipInitialVersionCreation"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity struct {
    Option1 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1 `security:"option"`
    Option2 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption2 `security:"option"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest struct {
    PathParams CloudkmsProjectsLocationsKeyRingsCryptoKeysCreatePathParams 
    QueryParams CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateQueryParams 
    Request *shared.CryptoKey `request:"mediaType=application/json"`
    Security CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity 
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse struct {
    ContentType string 
    CryptoKey *shared.CryptoKey 
    StatusCode int64 
    
}

