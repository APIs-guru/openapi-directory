package operations

import (
"openapi/pkg/models/shared")

type SQLDatabasesUpdatePathParams struct {
    Database string `pathParam:"style=simple,explode=false,name=database"`
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type SQLDatabasesUpdateQueryParams struct {
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

type SQLDatabasesUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLDatabasesUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLDatabasesUpdateSecurity struct {
    Option1 *SQLDatabasesUpdateSecurityOption1 `security:"option"`
    Option2 *SQLDatabasesUpdateSecurityOption2 `security:"option"`
    
}

type SQLDatabasesUpdateRequest struct {
    PathParams SQLDatabasesUpdatePathParams 
    QueryParams SQLDatabasesUpdateQueryParams 
    Request *shared.Database `request:"mediaType=application/json"`
    Security SQLDatabasesUpdateSecurity 
    
}

type SQLDatabasesUpdateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

