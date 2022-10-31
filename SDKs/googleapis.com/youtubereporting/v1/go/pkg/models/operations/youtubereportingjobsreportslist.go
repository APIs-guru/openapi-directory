package operations

import (
"openapi/pkg/models/shared")

type YoutubereportingJobsReportsListPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    
}

type YoutubereportingJobsReportsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartTimeAtOrAfter *string `queryParam:"style=form,explode=true,name=startTimeAtOrAfter"`
    StartTimeBefore *string `queryParam:"style=form,explode=true,name=startTimeBefore"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubereportingJobsReportsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubereportingJobsReportsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubereportingJobsReportsListSecurity struct {
    Option1 *YoutubereportingJobsReportsListSecurityOption1 `security:"option"`
    Option2 *YoutubereportingJobsReportsListSecurityOption2 `security:"option"`
    
}

type YoutubereportingJobsReportsListRequest struct {
    PathParams YoutubereportingJobsReportsListPathParams 
    QueryParams YoutubereportingJobsReportsListQueryParams 
    Security YoutubereportingJobsReportsListSecurity 
    
}

type YoutubereportingJobsReportsListResponse struct {
    ContentType string 
    ListReportsResponse *shared.ListReportsResponse 
    StatusCode int64 
    
}

