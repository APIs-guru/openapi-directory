package operations

import (
"openapi/pkg/models/shared")

type StorageObjectsInsertPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    
}


type StorageObjectsInsertProjectionEnum string

const (
    StorageObjectsInsertProjectionEnumFull StorageObjectsInsertProjectionEnum = "full"
StorageObjectsInsertProjectionEnumNoACL StorageObjectsInsertProjectionEnum = "noAcl"
)


type StorageObjectsInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IfGenerationMatch *string `queryParam:"style=form,explode=true,name=ifGenerationMatch"`
    IfGenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifGenerationNotMatch"`
    IfMetagenerationMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
    IfMetagenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Projection *StorageObjectsInsertProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type StorageObjectsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsInsertSecurity struct {
    Option1 *StorageObjectsInsertSecurityOption1 `security:"option"`
    Option2 *StorageObjectsInsertSecurityOption2 `security:"option"`
    
}

type StorageObjectsInsertRequest struct {
    PathParams StorageObjectsInsertPathParams 
    QueryParams StorageObjectsInsertQueryParams 
    Request []byte `request:"mediaType=application/octet-stream"`
    Security StorageObjectsInsertSecurity 
    
}

type StorageObjectsInsertResponse struct {
    ContentType string 
    Object *shared.Object 
    StatusCode int64 
    
}

