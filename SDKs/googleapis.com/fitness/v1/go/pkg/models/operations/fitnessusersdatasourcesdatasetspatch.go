package operations

import (
"openapi/pkg/models/shared")

type FitnessUsersDataSourcesDatasetsPatchPathParams struct {
    DataSourceID string `pathParam:"style=simple,explode=false,name=dataSourceId"`
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type FitnessUsersDataSourcesDatasetsPatchQueryParams struct {
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

type FitnessUsersDataSourcesDatasetsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurityOption8 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurityOption9 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurityOption10 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurityOption11 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesDatasetsPatchSecurity struct {
    Option1 *FitnessUsersDataSourcesDatasetsPatchSecurityOption1 `security:"option"`
    Option2 *FitnessUsersDataSourcesDatasetsPatchSecurityOption2 `security:"option"`
    Option3 *FitnessUsersDataSourcesDatasetsPatchSecurityOption3 `security:"option"`
    Option4 *FitnessUsersDataSourcesDatasetsPatchSecurityOption4 `security:"option"`
    Option5 *FitnessUsersDataSourcesDatasetsPatchSecurityOption5 `security:"option"`
    Option6 *FitnessUsersDataSourcesDatasetsPatchSecurityOption6 `security:"option"`
    Option7 *FitnessUsersDataSourcesDatasetsPatchSecurityOption7 `security:"option"`
    Option8 *FitnessUsersDataSourcesDatasetsPatchSecurityOption8 `security:"option"`
    Option9 *FitnessUsersDataSourcesDatasetsPatchSecurityOption9 `security:"option"`
    Option10 *FitnessUsersDataSourcesDatasetsPatchSecurityOption10 `security:"option"`
    Option11 *FitnessUsersDataSourcesDatasetsPatchSecurityOption11 `security:"option"`
    
}

type FitnessUsersDataSourcesDatasetsPatchRequest struct {
    PathParams FitnessUsersDataSourcesDatasetsPatchPathParams 
    QueryParams FitnessUsersDataSourcesDatasetsPatchQueryParams 
    Request *shared.Dataset `request:"mediaType=application/json"`
    Security FitnessUsersDataSourcesDatasetsPatchSecurity 
    
}

type FitnessUsersDataSourcesDatasetsPatchResponse struct {
    ContentType string 
    Dataset *shared.Dataset 
    StatusCode int64 
    
}

