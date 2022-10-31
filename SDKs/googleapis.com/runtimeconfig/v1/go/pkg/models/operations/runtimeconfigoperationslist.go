package operations

import (
"openapi/pkg/models/shared")

type RuntimeconfigOperationsListPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type RuntimeconfigOperationsListQueryParams struct {
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

type RuntimeconfigOperationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RuntimeconfigOperationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RuntimeconfigOperationsListSecurity struct {
    Option1 *RuntimeconfigOperationsListSecurityOption1 `security:"option"`
    Option2 *RuntimeconfigOperationsListSecurityOption2 `security:"option"`
    
}

type RuntimeconfigOperationsListRequest struct {
    PathParams RuntimeconfigOperationsListPathParams 
    QueryParams RuntimeconfigOperationsListQueryParams 
    Security RuntimeconfigOperationsListSecurity 
    
}

type RuntimeconfigOperationsListResponse struct {
    ContentType string 
    ListOperationsResponse *shared.ListOperationsResponse 
    StatusCode int64 
    
}

