package operations

import (
"openapi/pkg/models/shared")

type FitnessUsersDataSourcesListPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type FitnessUsersDataSourcesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DataTypeName []string `queryParam:"style=form,explode=true,name=dataTypeName"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FitnessUsersDataSourcesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption8 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption9 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption10 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption11 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption12 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption13 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption14 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption15 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption16 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption17 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption18 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption19 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption20 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption21 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurityOption22 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersDataSourcesListSecurity struct {
    Option1 *FitnessUsersDataSourcesListSecurityOption1 `security:"option"`
    Option2 *FitnessUsersDataSourcesListSecurityOption2 `security:"option"`
    Option3 *FitnessUsersDataSourcesListSecurityOption3 `security:"option"`
    Option4 *FitnessUsersDataSourcesListSecurityOption4 `security:"option"`
    Option5 *FitnessUsersDataSourcesListSecurityOption5 `security:"option"`
    Option6 *FitnessUsersDataSourcesListSecurityOption6 `security:"option"`
    Option7 *FitnessUsersDataSourcesListSecurityOption7 `security:"option"`
    Option8 *FitnessUsersDataSourcesListSecurityOption8 `security:"option"`
    Option9 *FitnessUsersDataSourcesListSecurityOption9 `security:"option"`
    Option10 *FitnessUsersDataSourcesListSecurityOption10 `security:"option"`
    Option11 *FitnessUsersDataSourcesListSecurityOption11 `security:"option"`
    Option12 *FitnessUsersDataSourcesListSecurityOption12 `security:"option"`
    Option13 *FitnessUsersDataSourcesListSecurityOption13 `security:"option"`
    Option14 *FitnessUsersDataSourcesListSecurityOption14 `security:"option"`
    Option15 *FitnessUsersDataSourcesListSecurityOption15 `security:"option"`
    Option16 *FitnessUsersDataSourcesListSecurityOption16 `security:"option"`
    Option17 *FitnessUsersDataSourcesListSecurityOption17 `security:"option"`
    Option18 *FitnessUsersDataSourcesListSecurityOption18 `security:"option"`
    Option19 *FitnessUsersDataSourcesListSecurityOption19 `security:"option"`
    Option20 *FitnessUsersDataSourcesListSecurityOption20 `security:"option"`
    Option21 *FitnessUsersDataSourcesListSecurityOption21 `security:"option"`
    Option22 *FitnessUsersDataSourcesListSecurityOption22 `security:"option"`
    
}

type FitnessUsersDataSourcesListRequest struct {
    PathParams FitnessUsersDataSourcesListPathParams 
    QueryParams FitnessUsersDataSourcesListQueryParams 
    Security FitnessUsersDataSourcesListSecurity 
    
}

type FitnessUsersDataSourcesListResponse struct {
    ContentType string 
    ListDataSourcesResponse *shared.ListDataSourcesResponse 
    StatusCode int64 
    
}

