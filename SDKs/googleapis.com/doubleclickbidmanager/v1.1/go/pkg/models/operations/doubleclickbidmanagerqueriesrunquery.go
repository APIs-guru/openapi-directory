package operations

import (
"openapi/pkg/models/shared")

type DoubleclickbidmanagerQueriesRunqueryPathParams struct {
    QueryID string `pathParam:"style=simple,explode=false,name=queryId"`
    
}

type DoubleclickbidmanagerQueriesRunqueryQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Asynchronous *bool `queryParam:"style=form,explode=true,name=asynchronous"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DoubleclickbidmanagerQueriesRunquerySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DoubleclickbidmanagerQueriesRunqueryRequest struct {
    PathParams DoubleclickbidmanagerQueriesRunqueryPathParams 
    QueryParams DoubleclickbidmanagerQueriesRunqueryQueryParams 
    Request *shared.RunQueryRequest `request:"mediaType=application/json"`
    Security DoubleclickbidmanagerQueriesRunquerySecurity 
    
}

type DoubleclickbidmanagerQueriesRunqueryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

