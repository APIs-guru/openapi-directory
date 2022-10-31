package operations

import (
"openapi/pkg/models/shared")

type CloudsearchIndexingDatasourcesItemsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudsearchIndexingDatasourcesItemsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ConnectorName *string `queryParam:"style=form,explode=true,name=connectorName"`
    DebugOptionsEnableDebugging *bool `queryParam:"style=form,explode=true,name=debugOptions.enableDebugging"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudsearchIndexingDatasourcesItemsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchIndexingDatasourcesItemsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchIndexingDatasourcesItemsGetSecurity struct {
    Option1 *CloudsearchIndexingDatasourcesItemsGetSecurityOption1 `security:"option"`
    Option2 *CloudsearchIndexingDatasourcesItemsGetSecurityOption2 `security:"option"`
    
}

type CloudsearchIndexingDatasourcesItemsGetRequest struct {
    PathParams CloudsearchIndexingDatasourcesItemsGetPathParams 
    QueryParams CloudsearchIndexingDatasourcesItemsGetQueryParams 
    Security CloudsearchIndexingDatasourcesItemsGetSecurity 
    
}

type CloudsearchIndexingDatasourcesItemsGetResponse struct {
    ContentType string 
    Item *shared.Item 
    StatusCode int64 
    
}

