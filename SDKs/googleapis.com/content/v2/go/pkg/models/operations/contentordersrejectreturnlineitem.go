package operations

import (
"openapi/pkg/models/shared")

type ContentOrdersRejectreturnlineitemPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
    
}

type ContentOrdersRejectreturnlineitemQueryParams struct {
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

type ContentOrdersRejectreturnlineitemSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentOrdersRejectreturnlineitemRequest struct {
    PathParams ContentOrdersRejectreturnlineitemPathParams 
    QueryParams ContentOrdersRejectreturnlineitemQueryParams 
    Request *shared.OrdersRejectReturnLineItemRequest `request:"mediaType=application/json"`
    Security ContentOrdersRejectreturnlineitemSecurity 
    
}

type ContentOrdersRejectreturnlineitemResponse struct {
    ContentType string 
    OrdersRejectReturnLineItemResponse *shared.OrdersRejectReturnLineItemResponse 
    StatusCode int64 
    
}

