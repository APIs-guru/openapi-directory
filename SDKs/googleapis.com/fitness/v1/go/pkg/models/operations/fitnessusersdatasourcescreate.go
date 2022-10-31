package operations

import (
"openapi/pkg/models/shared")

type FitnessUsersDataSourcesCreatePathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type FitnessUsersDataSourcesCreateQueryParams struct {
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

type FitnessUsersDataSourcesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurityOption8 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurityOption9 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurityOption10 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurityOption11 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesCreateSecurity struct {
    Option1 *FitnessUsersDataSourcesCreateSecurityOption1 `security:"option"`
    Option2 *FitnessUsersDataSourcesCreateSecurityOption2 `security:"option"`
    Option3 *FitnessUsersDataSourcesCreateSecurityOption3 `security:"option"`
    Option4 *FitnessUsersDataSourcesCreateSecurityOption4 `security:"option"`
    Option5 *FitnessUsersDataSourcesCreateSecurityOption5 `security:"option"`
    Option6 *FitnessUsersDataSourcesCreateSecurityOption6 `security:"option"`
    Option7 *FitnessUsersDataSourcesCreateSecurityOption7 `security:"option"`
    Option8 *FitnessUsersDataSourcesCreateSecurityOption8 `security:"option"`
    Option9 *FitnessUsersDataSourcesCreateSecurityOption9 `security:"option"`
    Option10 *FitnessUsersDataSourcesCreateSecurityOption10 `security:"option"`
    Option11 *FitnessUsersDataSourcesCreateSecurityOption11 `security:"option"`
    
}

type FitnessUsersDataSourcesCreateRequest struct {
    PathParams FitnessUsersDataSourcesCreatePathParams 
    QueryParams FitnessUsersDataSourcesCreateQueryParams 
    Request *shared.DataSource `request:"mediaType=application/json"`
    Security FitnessUsersDataSourcesCreateSecurity 
    
}

type FitnessUsersDataSourcesCreateResponse struct {
    ContentType string 
    DataSource *shared.DataSource 
    StatusCode int64 
    
}

