package operations

import (
"openapi/pkg/models/shared")

type YoutubereportingJobsGetPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    
}

type YoutubereportingJobsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubereportingJobsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubereportingJobsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubereportingJobsGetSecurity struct {
    Option1 *YoutubereportingJobsGetSecurityOption1 `security:"option"`
    Option2 *YoutubereportingJobsGetSecurityOption2 `security:"option"`
    
}

type YoutubereportingJobsGetRequest struct {
    PathParams YoutubereportingJobsGetPathParams 
    QueryParams YoutubereportingJobsGetQueryParams 
    Security YoutubereportingJobsGetSecurity 
    
}

type YoutubereportingJobsGetResponse struct {
    ContentType string 
    Job *shared.Job 
    StatusCode int64 
    
}

