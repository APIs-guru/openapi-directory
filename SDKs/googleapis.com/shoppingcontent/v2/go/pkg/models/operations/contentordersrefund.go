package operations

import (
"openapi/pkg/models/shared")

type ContentOrdersRefundPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
    
}

type ContentOrdersRefundQueryParams struct {
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

type ContentOrdersRefundSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentOrdersRefundRequest struct {
    PathParams ContentOrdersRefundPathParams 
    QueryParams ContentOrdersRefundQueryParams 
    Request *shared.OrdersRefundRequest `request:"mediaType=application/json"`
    Security ContentOrdersRefundSecurity 
    
}

type ContentOrdersRefundResponse struct {
    ContentType string 
    OrdersRefundResponse *shared.OrdersRefundResponse 
    StatusCode int64 
    
}

