package operations

import (
"openapi/pkg/models/shared")

type GmailUsersHistoryListPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}


type GmailUsersHistoryListHistoryTypesEnum string

const (
    GmailUsersHistoryListHistoryTypesEnumMessageAdded GmailUsersHistoryListHistoryTypesEnum = "messageAdded"
GmailUsersHistoryListHistoryTypesEnumMessageDeleted GmailUsersHistoryListHistoryTypesEnum = "messageDeleted"
GmailUsersHistoryListHistoryTypesEnumLabelAdded GmailUsersHistoryListHistoryTypesEnum = "labelAdded"
GmailUsersHistoryListHistoryTypesEnumLabelRemoved GmailUsersHistoryListHistoryTypesEnum = "labelRemoved"
)


type GmailUsersHistoryListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    HistoryTypes []GmailUsersHistoryListHistoryTypesEnum `queryParam:"style=form,explode=true,name=historyTypes"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LabelID *string `queryParam:"style=form,explode=true,name=labelId"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartHistoryID *string `queryParam:"style=form,explode=true,name=startHistoryId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type GmailUsersHistoryListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersHistoryListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersHistoryListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersHistoryListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersHistoryListSecurity struct {
    Option1 *GmailUsersHistoryListSecurityOption1 `security:"option"`
    Option2 *GmailUsersHistoryListSecurityOption2 `security:"option"`
    Option3 *GmailUsersHistoryListSecurityOption3 `security:"option"`
    Option4 *GmailUsersHistoryListSecurityOption4 `security:"option"`
    
}

type GmailUsersHistoryListRequest struct {
    PathParams GmailUsersHistoryListPathParams 
    QueryParams GmailUsersHistoryListQueryParams 
    Security GmailUsersHistoryListSecurity 
    
}

type GmailUsersHistoryListResponse struct {
    ContentType string 
    ListHistoryResponse *shared.ListHistoryResponse 
    StatusCode int64 
    
}

