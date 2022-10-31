package operations

import (
"openapi/pkg/models/shared")

type SourcerepoProjectsReposListPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type SourcerepoProjectsReposListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SourcerepoProjectsReposListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SourcerepoProjectsReposListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SourcerepoProjectsReposListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SourcerepoProjectsReposListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SourcerepoProjectsReposListSecurity struct {
    Option1 *SourcerepoProjectsReposListSecurityOption1 `security:"option"`
    Option2 *SourcerepoProjectsReposListSecurityOption2 `security:"option"`
    Option3 *SourcerepoProjectsReposListSecurityOption3 `security:"option"`
    Option4 *SourcerepoProjectsReposListSecurityOption4 `security:"option"`
    
}

type SourcerepoProjectsReposListRequest struct {
    PathParams SourcerepoProjectsReposListPathParams 
    QueryParams SourcerepoProjectsReposListQueryParams 
    Security SourcerepoProjectsReposListSecurity 
    
}

type SourcerepoProjectsReposListResponse struct {
    ContentType string 
    ListReposResponse *shared.ListReposResponse 
    StatusCode int64 
    
}

