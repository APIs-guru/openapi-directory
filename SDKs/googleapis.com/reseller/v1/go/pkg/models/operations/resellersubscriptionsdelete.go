package operations

import (
"openapi/pkg/models/shared")

type ResellerSubscriptionsDeletePathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}


type ResellerSubscriptionsDeleteDeletionTypeEnum string

const (
    ResellerSubscriptionsDeleteDeletionTypeEnumDeletionTypeUndefined ResellerSubscriptionsDeleteDeletionTypeEnum = "deletion_type_undefined"
ResellerSubscriptionsDeleteDeletionTypeEnumCancel ResellerSubscriptionsDeleteDeletionTypeEnum = "cancel"
ResellerSubscriptionsDeleteDeletionTypeEnumTransferToDirect ResellerSubscriptionsDeleteDeletionTypeEnum = "transfer_to_direct"
)


type ResellerSubscriptionsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DeletionType ResellerSubscriptionsDeleteDeletionTypeEnum `queryParam:"style=form,explode=true,name=deletionType"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ResellerSubscriptionsDeleteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ResellerSubscriptionsDeleteRequest struct {
    PathParams ResellerSubscriptionsDeletePathParams 
    QueryParams ResellerSubscriptionsDeleteQueryParams 
    Security ResellerSubscriptionsDeleteSecurity 
    
}

type ResellerSubscriptionsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

