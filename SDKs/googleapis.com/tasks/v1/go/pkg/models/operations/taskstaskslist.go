package operations

import (
"openapi/pkg/models/shared")

type TasksTasksListPathParams struct {
    Tasklist string `pathParam:"style=simple,explode=false,name=tasklist"`
    
}

type TasksTasksListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CompletedMax *string `queryParam:"style=form,explode=true,name=completedMax"`
    CompletedMin *string `queryParam:"style=form,explode=true,name=completedMin"`
    DueMax *string `queryParam:"style=form,explode=true,name=dueMax"`
    DueMin *string `queryParam:"style=form,explode=true,name=dueMin"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ShowCompleted *bool `queryParam:"style=form,explode=true,name=showCompleted"`
    ShowDeleted *bool `queryParam:"style=form,explode=true,name=showDeleted"`
    ShowHidden *bool `queryParam:"style=form,explode=true,name=showHidden"`
    UpdatedMin *string `queryParam:"style=form,explode=true,name=updatedMin"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type TasksTasksListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TasksTasksListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TasksTasksListSecurity struct {
    Option1 *TasksTasksListSecurityOption1 `security:"option"`
    Option2 *TasksTasksListSecurityOption2 `security:"option"`
    
}

type TasksTasksListRequest struct {
    PathParams TasksTasksListPathParams 
    QueryParams TasksTasksListQueryParams 
    Security TasksTasksListSecurity 
    
}

type TasksTasksListResponse struct {
    ContentType string 
    StatusCode int64 
    Tasks *shared.Tasks 
    
}

