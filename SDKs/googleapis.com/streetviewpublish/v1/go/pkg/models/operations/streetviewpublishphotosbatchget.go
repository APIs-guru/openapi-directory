package operations

import (
"openapi/pkg/models/shared")


type StreetviewpublishPhotosBatchGetViewEnum string

const (
    StreetviewpublishPhotosBatchGetViewEnumBasic StreetviewpublishPhotosBatchGetViewEnum = "BASIC"
StreetviewpublishPhotosBatchGetViewEnumIncludeDownloadURL StreetviewpublishPhotosBatchGetViewEnum = "INCLUDE_DOWNLOAD_URL"
)


type StreetviewpublishPhotosBatchGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PhotoIds []string `queryParam:"style=form,explode=true,name=photoIds"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *StreetviewpublishPhotosBatchGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type StreetviewpublishPhotosBatchGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StreetviewpublishPhotosBatchGetRequest struct {
    QueryParams StreetviewpublishPhotosBatchGetQueryParams 
    Security StreetviewpublishPhotosBatchGetSecurity 
    
}

type StreetviewpublishPhotosBatchGetResponse struct {
    BatchGetPhotosResponse *shared.BatchGetPhotosResponse 
    ContentType string 
    StatusCode int64 
    
}

