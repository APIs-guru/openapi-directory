package operations

import (
"openapi/pkg/models/shared")

type FirebasestorageProjectsBucketsAddFirebasePathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    
}

type FirebasestorageProjectsBucketsAddFirebaseQueryParams struct {
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

type FirebasestorageProjectsBucketsAddFirebaseSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasestorageProjectsBucketsAddFirebaseSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasestorageProjectsBucketsAddFirebaseSecurity struct {
    Option1 *FirebasestorageProjectsBucketsAddFirebaseSecurityOption1 `security:"option"`
    Option2 *FirebasestorageProjectsBucketsAddFirebaseSecurityOption2 `security:"option"`
    
}

type FirebasestorageProjectsBucketsAddFirebaseRequest struct {
    PathParams FirebasestorageProjectsBucketsAddFirebasePathParams 
    QueryParams FirebasestorageProjectsBucketsAddFirebaseQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security FirebasestorageProjectsBucketsAddFirebaseSecurity 
    
}

type FirebasestorageProjectsBucketsAddFirebaseResponse struct {
    Bucket *shared.Bucket 
    ContentType string 
    StatusCode int64 
    
}

