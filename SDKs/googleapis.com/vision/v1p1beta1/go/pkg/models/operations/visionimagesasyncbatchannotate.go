package operations

import (
"openapi/pkg/models/shared")

type VisionImagesAsyncBatchAnnotateQueryParams struct {
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

type VisionImagesAsyncBatchAnnotateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VisionImagesAsyncBatchAnnotateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VisionImagesAsyncBatchAnnotateSecurity struct {
    Option1 *VisionImagesAsyncBatchAnnotateSecurityOption1 `security:"option"`
    Option2 *VisionImagesAsyncBatchAnnotateSecurityOption2 `security:"option"`
    
}

type VisionImagesAsyncBatchAnnotateRequest struct {
    QueryParams VisionImagesAsyncBatchAnnotateQueryParams 
    Request *shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest `request:"mediaType=application/json"`
    Security VisionImagesAsyncBatchAnnotateSecurity 
    
}

type VisionImagesAsyncBatchAnnotateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

