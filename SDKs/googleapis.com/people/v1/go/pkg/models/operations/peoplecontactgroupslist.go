package operations

import (
"openapi/pkg/models/shared")

type PeopleContactGroupsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GroupFields *string `queryParam:"style=form,explode=true,name=groupFields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SyncToken *string `queryParam:"style=form,explode=true,name=syncToken"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type PeopleContactGroupsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeopleContactGroupsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeopleContactGroupsListSecurity struct {
    Option1 *PeopleContactGroupsListSecurityOption1 `security:"option"`
    Option2 *PeopleContactGroupsListSecurityOption2 `security:"option"`
    
}

type PeopleContactGroupsListRequest struct {
    QueryParams PeopleContactGroupsListQueryParams 
    Security PeopleContactGroupsListSecurity 
    
}

type PeopleContactGroupsListResponse struct {
    ContentType string 
    ListContactGroupsResponse *shared.ListContactGroupsResponse 
    StatusCode int64 
    
}

