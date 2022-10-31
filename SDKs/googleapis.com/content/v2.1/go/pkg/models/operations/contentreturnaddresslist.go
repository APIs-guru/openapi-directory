package operations

import (
"openapi/pkg/models/shared")

type ContentReturnaddressListPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}

type ContentReturnaddressListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Country *string `queryParam:"style=form,explode=true,name=country"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentReturnaddressListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentReturnaddressListRequest struct {
    PathParams ContentReturnaddressListPathParams 
    QueryParams ContentReturnaddressListQueryParams 
    Security ContentReturnaddressListSecurity 
    
}

type ContentReturnaddressListResponse struct {
    ContentType string 
    ReturnaddressListResponse *shared.ReturnaddressListResponse 
    StatusCode int64 
    
}

