package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsTemplatesLaunchPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DataflowProjectsTemplatesLaunchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DynamicTemplateGcsPath *string `queryParam:"style=form,explode=true,name=dynamicTemplate.gcsPath"`
    DynamicTemplateStagingLocation *string `queryParam:"style=form,explode=true,name=dynamicTemplate.stagingLocation"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GcsPath *string `queryParam:"style=form,explode=true,name=gcsPath"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Location *string `queryParam:"style=form,explode=true,name=location"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    ValidateOnly *bool `queryParam:"style=form,explode=true,name=validateOnly"`
    
}

type DataflowProjectsTemplatesLaunchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsTemplatesLaunchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsTemplatesLaunchSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsTemplatesLaunchSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsTemplatesLaunchSecurity struct {
    Option1 *DataflowProjectsTemplatesLaunchSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsTemplatesLaunchSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsTemplatesLaunchSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsTemplatesLaunchSecurityOption4 `security:"option"`
    
}

type DataflowProjectsTemplatesLaunchRequest struct {
    PathParams DataflowProjectsTemplatesLaunchPathParams 
    QueryParams DataflowProjectsTemplatesLaunchQueryParams 
    Request *shared.LaunchTemplateParameters `request:"mediaType=application/json"`
    Security DataflowProjectsTemplatesLaunchSecurity 
    
}

type DataflowProjectsTemplatesLaunchResponse struct {
    ContentType string 
    LaunchTemplateResponse *shared.LaunchTemplateResponse 
    StatusCode int64 
    
}

