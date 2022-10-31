package operations

import (
"openapi/pkg/models/shared")

type ContentRepricingrulesCreatePathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}

type ContentRepricingrulesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RuleID *string `queryParam:"style=form,explode=true,name=ruleId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentRepricingrulesCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentRepricingrulesCreateRequest struct {
    PathParams ContentRepricingrulesCreatePathParams 
    QueryParams ContentRepricingrulesCreateQueryParams 
    Request *shared.RepricingRule `request:"mediaType=application/json"`
    Security ContentRepricingrulesCreateSecurity 
    
}

type ContentRepricingrulesCreateResponse struct {
    ContentType string 
    RepricingRule *shared.RepricingRule 
    StatusCode int64 
    
}

