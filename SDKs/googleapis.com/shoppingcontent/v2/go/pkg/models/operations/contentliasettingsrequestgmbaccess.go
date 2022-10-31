package operations

import (
"openapi/pkg/models/shared")

type ContentLiasettingsRequestgmbaccessPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}

type ContentLiasettingsRequestgmbaccessQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GmbEmail string `queryParam:"style=form,explode=true,name=gmbEmail"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentLiasettingsRequestgmbaccessSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentLiasettingsRequestgmbaccessRequest struct {
    PathParams ContentLiasettingsRequestgmbaccessPathParams 
    QueryParams ContentLiasettingsRequestgmbaccessQueryParams 
    Security ContentLiasettingsRequestgmbaccessSecurity 
    
}

type ContentLiasettingsRequestgmbaccessResponse struct {
    ContentType string 
    LiasettingsRequestGmbAccessResponse *shared.LiasettingsRequestGmbAccessResponse 
    StatusCode int64 
    
}

