package operations

import (
"openapi/pkg/models/shared")

type FirebasehostingProjectsSitesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebasehostingProjectsSitesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebasehostingProjectsSitesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingProjectsSitesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingProjectsSitesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingProjectsSitesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingProjectsSitesListSecurity struct {
    Option1 *FirebasehostingProjectsSitesListSecurityOption1 `security:"option"`
    Option2 *FirebasehostingProjectsSitesListSecurityOption2 `security:"option"`
    Option3 *FirebasehostingProjectsSitesListSecurityOption3 `security:"option"`
    Option4 *FirebasehostingProjectsSitesListSecurityOption4 `security:"option"`
    
}

type FirebasehostingProjectsSitesListRequest struct {
    PathParams FirebasehostingProjectsSitesListPathParams 
    QueryParams FirebasehostingProjectsSitesListQueryParams 
    Security FirebasehostingProjectsSitesListSecurity 
    
}

type FirebasehostingProjectsSitesListResponse struct {
    ContentType string 
    ListSitesResponse *shared.ListSitesResponse 
    StatusCode int64 
    
}

