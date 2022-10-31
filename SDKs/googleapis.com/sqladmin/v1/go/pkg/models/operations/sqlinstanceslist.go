package operations

import (
"openapi/pkg/models/shared")

type SQLInstancesListPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type SQLInstancesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SQLInstancesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLInstancesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLInstancesListSecurity struct {
    Option1 *SQLInstancesListSecurityOption1 `security:"option"`
    Option2 *SQLInstancesListSecurityOption2 `security:"option"`
    
}

type SQLInstancesListRequest struct {
    PathParams SQLInstancesListPathParams 
    QueryParams SQLInstancesListQueryParams 
    Security SQLInstancesListSecurity 
    
}

type SQLInstancesListResponse struct {
    ContentType string 
    InstancesListResponse *shared.InstancesListResponse 
    StatusCode int64 
    
}

