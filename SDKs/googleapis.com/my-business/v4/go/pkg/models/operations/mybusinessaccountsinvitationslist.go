package operations

import (
"openapi/pkg/models/shared")

type MybusinessAccountsInvitationsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type MybusinessAccountsInvitationsListTargetTypeEnum string

const (
    MybusinessAccountsInvitationsListTargetTypeEnumAll MybusinessAccountsInvitationsListTargetTypeEnum = "ALL"
MybusinessAccountsInvitationsListTargetTypeEnumAccountsOnly MybusinessAccountsInvitationsListTargetTypeEnum = "ACCOUNTS_ONLY"
MybusinessAccountsInvitationsListTargetTypeEnumLocationsOnly MybusinessAccountsInvitationsListTargetTypeEnum = "LOCATIONS_ONLY"
)


type MybusinessAccountsInvitationsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    TargetType *MybusinessAccountsInvitationsListTargetTypeEnum `queryParam:"style=form,explode=true,name=targetType"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MybusinessAccountsInvitationsListRequest struct {
    PathParams MybusinessAccountsInvitationsListPathParams 
    QueryParams MybusinessAccountsInvitationsListQueryParams 
    
}

type MybusinessAccountsInvitationsListResponse struct {
    ContentType string 
    ListInvitationsResponse *shared.ListInvitationsResponse 
    StatusCode int64 
    
}

