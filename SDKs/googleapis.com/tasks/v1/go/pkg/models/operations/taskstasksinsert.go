package operations

import (
"openapi/pkg/models/shared")

type TasksTasksInsertPathParams struct {
    Tasklist string `pathParam:"style=simple,explode=false,name=tasklist"`
    
}

type TasksTasksInsertQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Parent *string `queryParam:"style=form,explode=true,name=parent"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Previous *string `queryParam:"style=form,explode=true,name=previous"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type TasksTasksInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TasksTasksInsertRequest struct {
    PathParams TasksTasksInsertPathParams 
    QueryParams TasksTasksInsertQueryParams 
    Request *shared.Task `request:"mediaType=application/json"`
    Security TasksTasksInsertSecurity 
    
}

type TasksTasksInsertResponse struct {
    ContentType string 
    StatusCode int64 
    Task *shared.Task 
    
}

