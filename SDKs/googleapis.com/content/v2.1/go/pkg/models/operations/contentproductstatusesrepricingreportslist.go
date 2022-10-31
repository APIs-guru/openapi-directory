package operations

import (
"openapi/pkg/models/shared")

type ContentProductstatusesRepricingreportsListPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type ContentProductstatusesRepricingreportsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    EndDate *string `queryParam:"style=form,explode=true,name=endDate"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RuleID *string `queryParam:"style=form,explode=true,name=ruleId"`
    StartDate *string `queryParam:"style=form,explode=true,name=startDate"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentProductstatusesRepricingreportsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentProductstatusesRepricingreportsListRequest struct {
    PathParams ContentProductstatusesRepricingreportsListPathParams 
    QueryParams ContentProductstatusesRepricingreportsListQueryParams 
    Security ContentProductstatusesRepricingreportsListSecurity 
    
}

type ContentProductstatusesRepricingreportsListResponse struct {
    ContentType string 
    ListRepricingProductReportsResponse *shared.ListRepricingProductReportsResponse 
    StatusCode int64 
    
}

