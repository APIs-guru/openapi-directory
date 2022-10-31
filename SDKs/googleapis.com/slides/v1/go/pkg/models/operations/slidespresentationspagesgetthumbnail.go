package operations

import (
"openapi/pkg/models/shared")

type SlidesPresentationsPagesGetThumbnailPathParams struct {
    PageObjectID string `pathParam:"style=simple,explode=false,name=pageObjectId"`
    PresentationID string `pathParam:"style=simple,explode=false,name=presentationId"`
    
}


type SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum string

const (
    SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnumPng SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum = "PNG"
)



type SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum string

const (
    SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnumThumbnailSizeUnspecified SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum = "THUMBNAIL_SIZE_UNSPECIFIED"
SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnumLarge SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum = "LARGE"
SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnumMedium SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum = "MEDIUM"
SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnumSmall SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum = "SMALL"
)


type SlidesPresentationsPagesGetThumbnailQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ThumbnailPropertiesMimeType *SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum `queryParam:"style=form,explode=true,name=thumbnailProperties.mimeType"`
    ThumbnailPropertiesThumbnailSize *SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum `queryParam:"style=form,explode=true,name=thumbnailProperties.thumbnailSize"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SlidesPresentationsPagesGetThumbnailSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsPagesGetThumbnailSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsPagesGetThumbnailSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsPagesGetThumbnailSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsPagesGetThumbnailSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsPagesGetThumbnailSecurity struct {
    Option1 *SlidesPresentationsPagesGetThumbnailSecurityOption1 `security:"option"`
    Option2 *SlidesPresentationsPagesGetThumbnailSecurityOption2 `security:"option"`
    Option3 *SlidesPresentationsPagesGetThumbnailSecurityOption3 `security:"option"`
    Option4 *SlidesPresentationsPagesGetThumbnailSecurityOption4 `security:"option"`
    Option5 *SlidesPresentationsPagesGetThumbnailSecurityOption5 `security:"option"`
    
}

type SlidesPresentationsPagesGetThumbnailRequest struct {
    PathParams SlidesPresentationsPagesGetThumbnailPathParams 
    QueryParams SlidesPresentationsPagesGetThumbnailQueryParams 
    Security SlidesPresentationsPagesGetThumbnailSecurity 
    
}

type SlidesPresentationsPagesGetThumbnailResponse struct {
    ContentType string 
    StatusCode int64 
    Thumbnail *shared.Thumbnail 
    
}

