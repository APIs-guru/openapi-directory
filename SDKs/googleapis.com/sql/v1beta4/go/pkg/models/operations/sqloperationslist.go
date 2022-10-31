package operations

import (
"openapi/pkg/models/shared")

type SQLOperationsListPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type SQLOperationsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Instance *string `queryParam:"style=form,explode=true,name=instance"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SQLOperationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLOperationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLOperationsListSecurity struct {
    Option1 *SQLOperationsListSecurityOption1 `security:"option"`
    Option2 *SQLOperationsListSecurityOption2 `security:"option"`
    
}

type SQLOperationsListRequest struct {
    PathParams SQLOperationsListPathParams 
    QueryParams SQLOperationsListQueryParams 
    Security SQLOperationsListSecurity 
    
}

type SQLOperationsListResponse struct {
    ContentType string 
    OperationsListResponse *shared.OperationsListResponse 
    StatusCode int64 
    
}

