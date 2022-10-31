package operations

import (
"openapi/pkg/models/shared")

type MybusinessaccountmanagementAccountsInvitationsAcceptPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MybusinessaccountmanagementAccountsInvitationsAcceptQueryParams struct {
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

type MybusinessaccountmanagementAccountsInvitationsAcceptRequest struct {
    PathParams MybusinessaccountmanagementAccountsInvitationsAcceptPathParams 
    QueryParams MybusinessaccountmanagementAccountsInvitationsAcceptQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type MybusinessaccountmanagementAccountsInvitationsAcceptResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

