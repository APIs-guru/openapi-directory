package operations

import (
"openapi/pkg/models/shared")

type StorageObjectsComposePathParams struct {
    DestinationBucket string `pathParam:"style=simple,explode=false,name=destinationBucket"`
    DestinationObject string `pathParam:"style=simple,explode=false,name=destinationObject"`
    
}

type StorageObjectsComposeQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IfGenerationMatch *string `queryParam:"style=form,explode=true,name=ifGenerationMatch"`
    IfMetagenerationMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type StorageObjectsComposeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsComposeSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsComposeSecurity struct {
    Option1 *StorageObjectsComposeSecurityOption1 `security:"option"`
    Option2 *StorageObjectsComposeSecurityOption2 `security:"option"`
    
}

type StorageObjectsComposeRequest struct {
    PathParams StorageObjectsComposePathParams 
    QueryParams StorageObjectsComposeQueryParams 
    Request *shared.ComposeRequest `request:"mediaType=application/json"`
    Security StorageObjectsComposeSecurity 
    
}

type StorageObjectsComposeResponse struct {
    ContentType string 
    Object *shared.Object 
    StatusCode int64 
    
}

