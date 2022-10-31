package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type SpannerProjectsInstancesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    InstanceDeadline *string `queryParam:"style=form,explode=true,name=instanceDeadline"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SpannerProjectsInstancesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesListSecurity struct {
    Option1 *SpannerProjectsInstancesListSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesListSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesListRequest struct {
    PathParams SpannerProjectsInstancesListPathParams 
    QueryParams SpannerProjectsInstancesListQueryParams 
    Security SpannerProjectsInstancesListSecurity 
    
}

type SpannerProjectsInstancesListResponse struct {
    ContentType string 
    ListInstancesResponse *shared.ListInstancesResponse 
    StatusCode int64 
    
}

