package operations

import (
"openapi/pkg/models/shared")

type StoragetransferTransferJobsDeletePathParams struct {
    JobName string `pathParam:"style=simple,explode=false,name=jobName"`
    
}

type StoragetransferTransferJobsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    ProjectID string `queryParam:"style=form,explode=true,name=projectId"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type StoragetransferTransferJobsDeleteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StoragetransferTransferJobsDeleteRequest struct {
    PathParams StoragetransferTransferJobsDeletePathParams 
    QueryParams StoragetransferTransferJobsDeleteQueryParams 
    Security StoragetransferTransferJobsDeleteSecurity 
    
}

type StoragetransferTransferJobsDeleteResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

