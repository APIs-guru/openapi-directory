package operations

import (
"openapi/pkg/models/shared")

type DatastoreProjectsRollbackPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DatastoreProjectsRollbackQueryParams struct {
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

type DatastoreProjectsRollbackSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatastoreProjectsRollbackSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatastoreProjectsRollbackSecurity struct {
    Option1 *DatastoreProjectsRollbackSecurityOption1 `security:"option"`
    Option2 *DatastoreProjectsRollbackSecurityOption2 `security:"option"`
    
}

type DatastoreProjectsRollbackRequest struct {
    PathParams DatastoreProjectsRollbackPathParams 
    QueryParams DatastoreProjectsRollbackQueryParams 
    Request *shared.RollbackRequest `request:"mediaType=application/json"`
    Security DatastoreProjectsRollbackSecurity 
    
}

type DatastoreProjectsRollbackResponse struct {
    ContentType string 
    RollbackResponse map[string]interface{} 
    StatusCode int64 
    
}

