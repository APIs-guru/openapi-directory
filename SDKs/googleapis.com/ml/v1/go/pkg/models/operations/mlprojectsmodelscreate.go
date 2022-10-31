package operations

import (
"openapi/pkg/models/shared")

type MlProjectsModelsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type MlProjectsModelsCreateQueryParams struct {
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

type MlProjectsModelsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MlProjectsModelsCreateRequest struct {
    PathParams MlProjectsModelsCreatePathParams 
    QueryParams MlProjectsModelsCreateQueryParams 
    Request *shared.GoogleCloudMlV1Model `request:"mediaType=application/json"`
    Security MlProjectsModelsCreateSecurity 
    
}

type MlProjectsModelsCreateResponse struct {
    ContentType string 
    GoogleCloudMlV1Model *shared.GoogleCloudMlV1Model 
    StatusCode int64 
    
}

