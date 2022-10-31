package operations

import (
"openapi/pkg/models/shared")

type ContentPosInsertPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    TargetMerchantID string `pathParam:"style=simple,explode=false,name=targetMerchantId"`
    
}

type ContentPosInsertQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DryRun *bool `queryParam:"style=form,explode=true,name=dryRun"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentPosInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentPosInsertRequest struct {
    PathParams ContentPosInsertPathParams 
    QueryParams ContentPosInsertQueryParams 
    Request *shared.PosStore `request:"mediaType=application/json"`
    Security ContentPosInsertSecurity 
    
}

type ContentPosInsertResponse struct {
    ContentType string 
    PosStore *shared.PosStore 
    StatusCode int64 
    
}

