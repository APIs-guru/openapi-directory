package operations

import (
"openapi/pkg/models/shared")

type ContentAccountsClaimwebsitePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}

type ContentAccountsClaimwebsiteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Overwrite *bool `queryParam:"style=form,explode=true,name=overwrite"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentAccountsClaimwebsiteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentAccountsClaimwebsiteRequest struct {
    PathParams ContentAccountsClaimwebsitePathParams 
    QueryParams ContentAccountsClaimwebsiteQueryParams 
    Security ContentAccountsClaimwebsiteSecurity 
    
}

type ContentAccountsClaimwebsiteResponse struct {
    AccountsClaimWebsiteResponse *shared.AccountsClaimWebsiteResponse 
    ContentType string 
    StatusCode int64 
    
}

