package operations

import (
"openapi/pkg/models/shared")

type BooksMylibraryReadingpositionsGetPathParams struct {
    VolumeID string `pathParam:"style=simple,explode=false,name=volumeId"`
    
}

type BooksMylibraryReadingpositionsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ContentVersion *string `queryParam:"style=form,explode=true,name=contentVersion"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BooksMylibraryReadingpositionsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksMylibraryReadingpositionsGetRequest struct {
    PathParams BooksMylibraryReadingpositionsGetPathParams 
    QueryParams BooksMylibraryReadingpositionsGetQueryParams 
    Security BooksMylibraryReadingpositionsGetSecurity 
    
}

type BooksMylibraryReadingpositionsGetResponse struct {
    ContentType string 
    ReadingPosition *shared.ReadingPosition 
    StatusCode int64 
    
}

