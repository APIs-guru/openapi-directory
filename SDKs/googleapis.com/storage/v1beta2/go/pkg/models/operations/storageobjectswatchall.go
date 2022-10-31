package operations

import (
"openapi/pkg/models/shared")

type StorageObjectsWatchAllPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    
}


type StorageObjectsWatchAllProjectionEnum string

const (
    StorageObjectsWatchAllProjectionEnumFull StorageObjectsWatchAllProjectionEnum = "full"
StorageObjectsWatchAllProjectionEnumNoACL StorageObjectsWatchAllProjectionEnum = "noAcl"
)


type StorageObjectsWatchAllQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Delimiter *string `queryParam:"style=form,explode=true,name=delimiter"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    Prefix *string `queryParam:"style=form,explode=true,name=prefix"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Projection *StorageObjectsWatchAllProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    Versions *bool `queryParam:"style=form,explode=true,name=versions"`
    
}

type StorageObjectsWatchAllSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsWatchAllSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsWatchAllSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsWatchAllSecurity struct {
    Option1 *StorageObjectsWatchAllSecurityOption1 `security:"option"`
    Option2 *StorageObjectsWatchAllSecurityOption2 `security:"option"`
    Option3 *StorageObjectsWatchAllSecurityOption3 `security:"option"`
    
}

type StorageObjectsWatchAllRequest struct {
    PathParams StorageObjectsWatchAllPathParams 
    QueryParams StorageObjectsWatchAllQueryParams 
    Request *shared.Channel `request:"mediaType=application/json"`
    Security StorageObjectsWatchAllSecurity 
    
}

type StorageObjectsWatchAllResponse struct {
    Channel *shared.Channel 
    ContentType string 
    StatusCode int64 
    
}

