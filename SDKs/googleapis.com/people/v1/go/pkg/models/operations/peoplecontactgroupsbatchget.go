package operations

import (
"openapi/pkg/models/shared")

type PeopleContactGroupsBatchGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GroupFields *string `queryParam:"style=form,explode=true,name=groupFields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxMembers *int64 `queryParam:"style=form,explode=true,name=maxMembers"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ResourceNames []string `queryParam:"style=form,explode=true,name=resourceNames"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type PeopleContactGroupsBatchGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeopleContactGroupsBatchGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeopleContactGroupsBatchGetSecurity struct {
    Option1 *PeopleContactGroupsBatchGetSecurityOption1 `security:"option"`
    Option2 *PeopleContactGroupsBatchGetSecurityOption2 `security:"option"`
    
}

type PeopleContactGroupsBatchGetRequest struct {
    QueryParams PeopleContactGroupsBatchGetQueryParams 
    Security PeopleContactGroupsBatchGetSecurity 
    
}

type PeopleContactGroupsBatchGetResponse struct {
    BatchGetContactGroupsResponse *shared.BatchGetContactGroupsResponse 
    ContentType string 
    StatusCode int64 
    
}

