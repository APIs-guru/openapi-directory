package operations

import (
"openapi/pkg/models/shared")

type TestingProjectsTestMatricesGetPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    TestMatrixID string `pathParam:"style=simple,explode=false,name=testMatrixId"`
    
}

type TestingProjectsTestMatricesGetQueryParams struct {
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

type TestingProjectsTestMatricesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TestingProjectsTestMatricesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TestingProjectsTestMatricesGetSecurity struct {
    Option1 *TestingProjectsTestMatricesGetSecurityOption1 `security:"option"`
    Option2 *TestingProjectsTestMatricesGetSecurityOption2 `security:"option"`
    
}

type TestingProjectsTestMatricesGetRequest struct {
    PathParams TestingProjectsTestMatricesGetPathParams 
    QueryParams TestingProjectsTestMatricesGetQueryParams 
    Security TestingProjectsTestMatricesGetSecurity 
    
}

type TestingProjectsTestMatricesGetResponse struct {
    ContentType string 
    StatusCode int64 
    TestMatrix *shared.TestMatrix 
    
}

