package operations

import (
"openapi/pkg/models/shared")

type CloudsearchIndexingDatasourcesGetSchemaPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudsearchIndexingDatasourcesGetSchemaQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DebugOptionsEnableDebugging *bool `queryParam:"style=form,explode=true,name=debugOptions.enableDebugging"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudsearchIndexingDatasourcesGetSchemaSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchIndexingDatasourcesGetSchemaSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchIndexingDatasourcesGetSchemaSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchIndexingDatasourcesGetSchemaSecurity struct {
    Option1 *CloudsearchIndexingDatasourcesGetSchemaSecurityOption1 `security:"option"`
    Option2 *CloudsearchIndexingDatasourcesGetSchemaSecurityOption2 `security:"option"`
    Option3 *CloudsearchIndexingDatasourcesGetSchemaSecurityOption3 `security:"option"`
    
}

type CloudsearchIndexingDatasourcesGetSchemaRequest struct {
    PathParams CloudsearchIndexingDatasourcesGetSchemaPathParams 
    QueryParams CloudsearchIndexingDatasourcesGetSchemaQueryParams 
    Security CloudsearchIndexingDatasourcesGetSchemaSecurity 
    
}

type CloudsearchIndexingDatasourcesGetSchemaResponse struct {
    ContentType string 
    Schema *shared.Schema 
    StatusCode int64 
    
}

