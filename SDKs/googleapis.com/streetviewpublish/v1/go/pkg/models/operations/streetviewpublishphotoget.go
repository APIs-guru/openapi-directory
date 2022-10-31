package operations

import (
"openapi/pkg/models/shared")

type StreetviewpublishPhotoGetPathParams struct {
    PhotoID string `pathParam:"style=simple,explode=false,name=photoId"`
    
}


type StreetviewpublishPhotoGetViewEnum string

const (
    StreetviewpublishPhotoGetViewEnumBasic StreetviewpublishPhotoGetViewEnum = "BASIC"
StreetviewpublishPhotoGetViewEnumIncludeDownloadURL StreetviewpublishPhotoGetViewEnum = "INCLUDE_DOWNLOAD_URL"
)


type StreetviewpublishPhotoGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *StreetviewpublishPhotoGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type StreetviewpublishPhotoGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StreetviewpublishPhotoGetRequest struct {
    PathParams StreetviewpublishPhotoGetPathParams 
    QueryParams StreetviewpublishPhotoGetQueryParams 
    Security StreetviewpublishPhotoGetSecurity 
    
}

type StreetviewpublishPhotoGetResponse struct {
    ContentType string 
    Photo *shared.Photo 
    StatusCode int64 
    
}

