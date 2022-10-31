package operations

import (
"openapi/pkg/models/shared")

type GmailUsersThreadsListPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersThreadsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeSpamTrash *bool `queryParam:"style=form,explode=true,name=includeSpamTrash"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LabelIds []string `queryParam:"style=form,explode=true,name=labelIds"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type GmailUsersThreadsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersThreadsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersThreadsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersThreadsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersThreadsListSecurity struct {
    Option1 *GmailUsersThreadsListSecurityOption1 `security:"option"`
    Option2 *GmailUsersThreadsListSecurityOption2 `security:"option"`
    Option3 *GmailUsersThreadsListSecurityOption3 `security:"option"`
    Option4 *GmailUsersThreadsListSecurityOption4 `security:"option"`
    
}

type GmailUsersThreadsListRequest struct {
    PathParams GmailUsersThreadsListPathParams 
    QueryParams GmailUsersThreadsListQueryParams 
    Security GmailUsersThreadsListSecurity 
    
}

type GmailUsersThreadsListResponse struct {
    ContentType string 
    ListThreadsResponse *shared.ListThreadsResponse 
    StatusCode int64 
    
}

