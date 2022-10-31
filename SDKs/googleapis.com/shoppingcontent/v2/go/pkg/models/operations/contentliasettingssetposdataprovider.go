package operations

import (
"openapi/pkg/models/shared")

type ContentLiasettingsSetposdataproviderPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}

type ContentLiasettingsSetposdataproviderQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Country string `queryParam:"style=form,explode=true,name=country"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PosDataProviderID *string `queryParam:"style=form,explode=true,name=posDataProviderId"`
    PosExternalAccountID *string `queryParam:"style=form,explode=true,name=posExternalAccountId"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentLiasettingsSetposdataproviderSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentLiasettingsSetposdataproviderRequest struct {
    PathParams ContentLiasettingsSetposdataproviderPathParams 
    QueryParams ContentLiasettingsSetposdataproviderQueryParams 
    Security ContentLiasettingsSetposdataproviderSecurity 
    
}

type ContentLiasettingsSetposdataproviderResponse struct {
    ContentType string 
    LiasettingsSetPosDataProviderResponse *shared.LiasettingsSetPosDataProviderResponse 
    StatusCode int64 
    
}

