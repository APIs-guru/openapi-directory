package operations

import (
"openapi/pkg/models/shared")

type VisionImagesAnnotateQueryParams struct {
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

type VisionImagesAnnotateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VisionImagesAnnotateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VisionImagesAnnotateSecurity struct {
    Option1 *VisionImagesAnnotateSecurityOption1 `security:"option"`
    Option2 *VisionImagesAnnotateSecurityOption2 `security:"option"`
    
}

type VisionImagesAnnotateRequest struct {
    QueryParams VisionImagesAnnotateQueryParams 
    Request *shared.GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest `request:"mediaType=application/json"`
    Security VisionImagesAnnotateSecurity 
    
}

type VisionImagesAnnotateResponse struct {
    ContentType string 
    GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse *shared.GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse 
    StatusCode int64 
    
}

