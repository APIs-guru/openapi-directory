package operations

import (
"openapi/pkg/models/shared")

type CloudsearchOperationsLroListPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudsearchOperationsLroListQueryParams struct {
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

type CloudsearchOperationsLroListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsLroListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsLroListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsLroListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsLroListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsLroListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsLroListSecurity struct {
    Option1 *CloudsearchOperationsLroListSecurityOption1 `security:"option"`
    Option2 *CloudsearchOperationsLroListSecurityOption2 `security:"option"`
    Option3 *CloudsearchOperationsLroListSecurityOption3 `security:"option"`
    Option4 *CloudsearchOperationsLroListSecurityOption4 `security:"option"`
    Option5 *CloudsearchOperationsLroListSecurityOption5 `security:"option"`
    Option6 *CloudsearchOperationsLroListSecurityOption6 `security:"option"`
    
}

type CloudsearchOperationsLroListRequest struct {
    PathParams CloudsearchOperationsLroListPathParams 
    QueryParams CloudsearchOperationsLroListQueryParams 
    Security CloudsearchOperationsLroListSecurity 
    
}

type CloudsearchOperationsLroListResponse struct {
    ContentType string 
    ListOperationsResponse *shared.ListOperationsResponse 
    StatusCode int64 
    
}

