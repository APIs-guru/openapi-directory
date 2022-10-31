package operations

import (
"openapi/pkg/models/shared")

type RecaptchaenterpriseProjectsKeysCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type RecaptchaenterpriseProjectsKeysCreateQueryParams struct {
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

type RecaptchaenterpriseProjectsKeysCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RecaptchaenterpriseProjectsKeysCreateRequest struct {
    PathParams RecaptchaenterpriseProjectsKeysCreatePathParams 
    QueryParams RecaptchaenterpriseProjectsKeysCreateQueryParams 
    Request *shared.GoogleCloudRecaptchaenterpriseV1Key `request:"mediaType=application/json"`
    Security RecaptchaenterpriseProjectsKeysCreateSecurity 
    
}

type RecaptchaenterpriseProjectsKeysCreateResponse struct {
    ContentType string 
    GoogleCloudRecaptchaenterpriseV1Key *shared.GoogleCloudRecaptchaenterpriseV1Key 
    StatusCode int64 
    
}

