package operations

import (
"openapi/pkg/models/shared")

type ContentProductstatusesListPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}

type ContentProductstatusesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Destinations []string `queryParam:"style=form,explode=true,name=destinations"`
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

type ContentProductstatusesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentProductstatusesListRequest struct {
    PathParams ContentProductstatusesListPathParams 
    QueryParams ContentProductstatusesListQueryParams 
    Security ContentProductstatusesListSecurity 
    
}

type ContentProductstatusesListResponse struct {
    ContentType string 
    ProductstatusesListResponse *shared.ProductstatusesListResponse 
    StatusCode int64 
    
}

