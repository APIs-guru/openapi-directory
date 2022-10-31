package operations

import (
"openapi/pkg/models/shared")

type FirebaserulesProjectsRulesetsListPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type FirebaserulesProjectsRulesetsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebaserulesProjectsRulesetsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaserulesProjectsRulesetsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaserulesProjectsRulesetsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaserulesProjectsRulesetsListSecurity struct {
    Option1 *FirebaserulesProjectsRulesetsListSecurityOption1 `security:"option"`
    Option2 *FirebaserulesProjectsRulesetsListSecurityOption2 `security:"option"`
    Option3 *FirebaserulesProjectsRulesetsListSecurityOption3 `security:"option"`
    
}

type FirebaserulesProjectsRulesetsListRequest struct {
    PathParams FirebaserulesProjectsRulesetsListPathParams 
    QueryParams FirebaserulesProjectsRulesetsListQueryParams 
    Security FirebaserulesProjectsRulesetsListSecurity 
    
}

type FirebaserulesProjectsRulesetsListResponse struct {
    ContentType string 
    ListRulesetsResponse *shared.ListRulesetsResponse 
    StatusCode int64 
    
}

