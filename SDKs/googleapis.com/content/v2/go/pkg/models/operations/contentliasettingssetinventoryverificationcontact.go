package operations

import (
"openapi/pkg/models/shared")

type ContentLiasettingsSetinventoryverificationcontactPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}

type ContentLiasettingsSetinventoryverificationcontactQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ContactEmail string `queryParam:"style=form,explode=true,name=contactEmail"`
    ContactName string `queryParam:"style=form,explode=true,name=contactName"`
    Country string `queryParam:"style=form,explode=true,name=country"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Language string `queryParam:"style=form,explode=true,name=language"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentLiasettingsSetinventoryverificationcontactSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentLiasettingsSetinventoryverificationcontactRequest struct {
    PathParams ContentLiasettingsSetinventoryverificationcontactPathParams 
    QueryParams ContentLiasettingsSetinventoryverificationcontactQueryParams 
    Security ContentLiasettingsSetinventoryverificationcontactSecurity 
    
}

type ContentLiasettingsSetinventoryverificationcontactResponse struct {
    ContentType string 
    LiasettingsSetInventoryVerificationContactResponse *shared.LiasettingsSetInventoryVerificationContactResponse 
    StatusCode int64 
    
}

