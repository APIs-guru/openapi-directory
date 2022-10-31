package operations

import (
"openapi/pkg/models/shared")

type SourcerepoProjectsReposCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type SourcerepoProjectsReposCreateQueryParams struct {
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

type SourcerepoProjectsReposCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SourcerepoProjectsReposCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SourcerepoProjectsReposCreateSecurity struct {
    Option1 *SourcerepoProjectsReposCreateSecurityOption1 `security:"option"`
    Option2 *SourcerepoProjectsReposCreateSecurityOption2 `security:"option"`
    
}

type SourcerepoProjectsReposCreateRequest struct {
    PathParams SourcerepoProjectsReposCreatePathParams 
    QueryParams SourcerepoProjectsReposCreateQueryParams 
    Request *shared.Repo `request:"mediaType=application/json"`
    Security SourcerepoProjectsReposCreateSecurity 
    
}

type SourcerepoProjectsReposCreateResponse struct {
    ContentType string 
    Repo *shared.Repo 
    StatusCode int64 
    
}

