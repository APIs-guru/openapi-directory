package operations

import (
"openapi/pkg/models/shared")

type MirrorAccountsInsertPathParams struct {
    AccountName string `pathParam:"style=simple,explode=false,name=accountName"`
    AccountType string `pathParam:"style=simple,explode=false,name=accountType"`
    UserToken string `pathParam:"style=simple,explode=false,name=userToken"`
    
}

type MirrorAccountsInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type MirrorAccountsInsertRequest struct {
    PathParams MirrorAccountsInsertPathParams 
    QueryParams MirrorAccountsInsertQueryParams 
    Request *shared.Account `request:"mediaType=application/json"`
    
}

type MirrorAccountsInsertResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

