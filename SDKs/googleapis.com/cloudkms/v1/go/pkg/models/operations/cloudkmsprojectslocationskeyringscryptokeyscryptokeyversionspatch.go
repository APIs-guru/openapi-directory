package operations

import (
"openapi/pkg/models/shared")

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity struct {
    Option1 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1 `security:"option"`
    Option2 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2 `security:"option"`
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest struct {
    PathParams CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams 
    QueryParams CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams 
    Request *shared.CryptoKeyVersion `request:"mediaType=application/json"`
    Security CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity 
    
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse struct {
    ContentType string 
    CryptoKeyVersion *shared.CryptoKeyVersion 
    StatusCode int64 
    
}

