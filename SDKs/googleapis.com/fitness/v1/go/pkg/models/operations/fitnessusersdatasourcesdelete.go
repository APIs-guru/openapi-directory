package operations

import (
"openapi/pkg/models/shared")

type FitnessUsersDataSourcesDeletePathParams struct {
    DataSourceID string `pathParam:"style=simple,explode=false,name=dataSourceId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type FitnessUsersDataSourcesDeleteQueryParams struct {
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

type FitnessUsersDataSourcesDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurityOption8 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurityOption9 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurityOption10 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurityOption11 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDeleteSecurity struct {
    Option1 *FitnessUsersDataSourcesDeleteSecurityOption1 `security:"option"`
    Option2 *FitnessUsersDataSourcesDeleteSecurityOption2 `security:"option"`
    Option3 *FitnessUsersDataSourcesDeleteSecurityOption3 `security:"option"`
    Option4 *FitnessUsersDataSourcesDeleteSecurityOption4 `security:"option"`
    Option5 *FitnessUsersDataSourcesDeleteSecurityOption5 `security:"option"`
    Option6 *FitnessUsersDataSourcesDeleteSecurityOption6 `security:"option"`
    Option7 *FitnessUsersDataSourcesDeleteSecurityOption7 `security:"option"`
    Option8 *FitnessUsersDataSourcesDeleteSecurityOption8 `security:"option"`
    Option9 *FitnessUsersDataSourcesDeleteSecurityOption9 `security:"option"`
    Option10 *FitnessUsersDataSourcesDeleteSecurityOption10 `security:"option"`
    Option11 *FitnessUsersDataSourcesDeleteSecurityOption11 `security:"option"`
    
}

type FitnessUsersDataSourcesDeleteRequest struct {
    PathParams FitnessUsersDataSourcesDeletePathParams 
    QueryParams FitnessUsersDataSourcesDeleteQueryParams 
    Security FitnessUsersDataSourcesDeleteSecurity 
    
}

type FitnessUsersDataSourcesDeleteResponse struct {
    ContentType string 
    DataSource *shared.DataSource 
    StatusCode int64 
    
}

