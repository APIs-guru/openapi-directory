package operations

import (
"openapi/pkg/models/shared")

type BooksMylibraryBookshelvesMoveVolumePathParams struct {
    Shelf string `pathParam:"style=simple,explode=false,name=shelf"`
    
}

type BooksMylibraryBookshelvesMoveVolumeQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    VolumeID string `queryParam:"style=form,explode=true,name=volumeId"`
    VolumePosition int64 `queryParam:"style=form,explode=true,name=volumePosition"`
    
}

type BooksMylibraryBookshelvesMoveVolumeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksMylibraryBookshelvesMoveVolumeRequest struct {
    PathParams BooksMylibraryBookshelvesMoveVolumePathParams 
    QueryParams BooksMylibraryBookshelvesMoveVolumeQueryParams 
    Security BooksMylibraryBookshelvesMoveVolumeSecurity 
    
}

type BooksMylibraryBookshelvesMoveVolumeResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

