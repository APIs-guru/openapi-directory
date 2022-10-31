package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams struct {
    Session string `pathParam:"style=simple,explode=false,name=session"`
    
}

type SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams struct {
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

type SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity struct {
    Option1 *SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest struct {
    PathParams SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams 
    QueryParams SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams 
    Request *shared.PartitionQueryRequest `request:"mediaType=application/json"`
    Security SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity 
    
}

type SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse struct {
    ContentType string 
    PartitionResponse *shared.PartitionResponse 
    StatusCode int64 
    
}

