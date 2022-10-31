package operations

import (
"openapi/pkg/models/shared")

type CloudsearchIndexingDatasourcesItemsDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type CloudsearchIndexingDatasourcesItemsDeleteModeEnum string

const (
    CloudsearchIndexingDatasourcesItemsDeleteModeEnumUnspecified CloudsearchIndexingDatasourcesItemsDeleteModeEnum = "UNSPECIFIED"
CloudsearchIndexingDatasourcesItemsDeleteModeEnumSynchronous CloudsearchIndexingDatasourcesItemsDeleteModeEnum = "SYNCHRONOUS"
CloudsearchIndexingDatasourcesItemsDeleteModeEnumAsynchronous CloudsearchIndexingDatasourcesItemsDeleteModeEnum = "ASYNCHRONOUS"
)


type CloudsearchIndexingDatasourcesItemsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ConnectorName *string `queryParam:"style=form,explode=true,name=connectorName"`
    DebugOptionsEnableDebugging *bool `queryParam:"style=form,explode=true,name=debugOptions.enableDebugging"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Mode *CloudsearchIndexingDatasourcesItemsDeleteModeEnum `queryParam:"style=form,explode=true,name=mode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    Version *string `queryParam:"style=form,explode=true,name=version"`
    
}

type CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchIndexingDatasourcesItemsDeleteSecurity struct {
    Option1 *CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1 `security:"option"`
    Option2 *CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2 `security:"option"`
    
}

type CloudsearchIndexingDatasourcesItemsDeleteRequest struct {
    PathParams CloudsearchIndexingDatasourcesItemsDeletePathParams 
    QueryParams CloudsearchIndexingDatasourcesItemsDeleteQueryParams 
    Security CloudsearchIndexingDatasourcesItemsDeleteSecurity 
    
}

type CloudsearchIndexingDatasourcesItemsDeleteResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

