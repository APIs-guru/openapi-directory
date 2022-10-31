package operations

import (
"openapi/pkg/models/shared")

type DatastoreProjectsReserveIdsPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DatastoreProjectsReserveIdsQueryParams struct {
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

type DatastoreProjectsReserveIdsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatastoreProjectsReserveIdsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatastoreProjectsReserveIdsSecurity struct {
    Option1 *DatastoreProjectsReserveIdsSecurityOption1 `security:"option"`
    Option2 *DatastoreProjectsReserveIdsSecurityOption2 `security:"option"`
    
}

type DatastoreProjectsReserveIdsRequest struct {
    PathParams DatastoreProjectsReserveIdsPathParams 
    QueryParams DatastoreProjectsReserveIdsQueryParams 
    Request *shared.ReserveIdsRequest `request:"mediaType=application/json"`
    Security DatastoreProjectsReserveIdsSecurity 
    
}

type DatastoreProjectsReserveIdsResponse struct {
    ContentType string 
    ReserveIdsResponse map[string]interface{} 
    StatusCode int64 
    
}

