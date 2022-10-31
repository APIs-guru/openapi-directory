package operations

import (
"openapi/pkg/models/shared")

type DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams struct {
    GuaranteedOrderID string `pathParam:"style=simple,explode=false,name=guaranteedOrderId"`
    
}

type DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams struct {
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

type DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest struct {
    PathParams DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams 
    QueryParams DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams 
    Request *shared.EditGuaranteedOrderReadAccessorsRequest `request:"mediaType=application/json"`
    Security DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity 
    
}

type DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse struct {
    ContentType string 
    EditGuaranteedOrderReadAccessorsResponse *shared.EditGuaranteedOrderReadAccessorsResponse 
    StatusCode int64 
    
}

