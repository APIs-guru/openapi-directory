package operations

import (
"openapi/pkg/models/shared")

type BooksMylibraryBookshelvesRemoveVolumePathParams struct {
    Shelf string `pathParam:"style=simple,explode=false,name=shelf"`
    
}


type BooksMylibraryBookshelvesRemoveVolumeReasonEnum string

const (
    BooksMylibraryBookshelvesRemoveVolumeReasonEnumReasonUndefined BooksMylibraryBookshelvesRemoveVolumeReasonEnum = "REASON_UNDEFINED"
BooksMylibraryBookshelvesRemoveVolumeReasonEnumOnboarding BooksMylibraryBookshelvesRemoveVolumeReasonEnum = "ONBOARDING"
)


type BooksMylibraryBookshelvesRemoveVolumeQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Reason *BooksMylibraryBookshelvesRemoveVolumeReasonEnum `queryParam:"style=form,explode=true,name=reason"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    VolumeID string `queryParam:"style=form,explode=true,name=volumeId"`
    
}

type BooksMylibraryBookshelvesRemoveVolumeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksMylibraryBookshelvesRemoveVolumeRequest struct {
    PathParams BooksMylibraryBookshelvesRemoveVolumePathParams 
    QueryParams BooksMylibraryBookshelvesRemoveVolumeQueryParams 
    Security BooksMylibraryBookshelvesRemoveVolumeSecurity 
    
}

type BooksMylibraryBookshelvesRemoveVolumeResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

