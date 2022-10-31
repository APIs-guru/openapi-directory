package operations

import (
"openapi/pkg/models/shared")


type BooksVolumesMybooksListAcquireMethodEnum string

const (
    BooksVolumesMybooksListAcquireMethodEnumAcquireMethodUndefined BooksVolumesMybooksListAcquireMethodEnum = "ACQUIRE_METHOD_UNDEFINED"
BooksVolumesMybooksListAcquireMethodEnumFamilyShared BooksVolumesMybooksListAcquireMethodEnum = "FAMILY_SHARED"
BooksVolumesMybooksListAcquireMethodEnumPreordered BooksVolumesMybooksListAcquireMethodEnum = "PREORDERED"
BooksVolumesMybooksListAcquireMethodEnumPreviouslyRented BooksVolumesMybooksListAcquireMethodEnum = "PREVIOUSLY_RENTED"
BooksVolumesMybooksListAcquireMethodEnumPublicDomain BooksVolumesMybooksListAcquireMethodEnum = "PUBLIC_DOMAIN"
BooksVolumesMybooksListAcquireMethodEnumPurchased BooksVolumesMybooksListAcquireMethodEnum = "PURCHASED"
BooksVolumesMybooksListAcquireMethodEnumRented BooksVolumesMybooksListAcquireMethodEnum = "RENTED"
BooksVolumesMybooksListAcquireMethodEnumSample BooksVolumesMybooksListAcquireMethodEnum = "SAMPLE"
BooksVolumesMybooksListAcquireMethodEnumUploaded BooksVolumesMybooksListAcquireMethodEnum = "UPLOADED"
)



type BooksVolumesMybooksListProcessingStateEnum string

const (
    BooksVolumesMybooksListProcessingStateEnumProcessingStateUndefined BooksVolumesMybooksListProcessingStateEnum = "PROCESSING_STATE_UNDEFINED"
BooksVolumesMybooksListProcessingStateEnumCompletedFailed BooksVolumesMybooksListProcessingStateEnum = "COMPLETED_FAILED"
BooksVolumesMybooksListProcessingStateEnumCompletedSuccess BooksVolumesMybooksListProcessingStateEnum = "COMPLETED_SUCCESS"
BooksVolumesMybooksListProcessingStateEnumRunning BooksVolumesMybooksListProcessingStateEnum = "RUNNING"
)


type BooksVolumesMybooksListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AcquireMethod []BooksVolumesMybooksListAcquireMethodEnum `queryParam:"style=form,explode=true,name=acquireMethod"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Country *string `queryParam:"style=form,explode=true,name=country"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    ProcessingState []BooksVolumesMybooksListProcessingStateEnum `queryParam:"style=form,explode=true,name=processingState"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BooksVolumesMybooksListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksVolumesMybooksListRequest struct {
    QueryParams BooksVolumesMybooksListQueryParams 
    Security BooksVolumesMybooksListSecurity 
    
}

type BooksVolumesMybooksListResponse struct {
    ContentType string 
    StatusCode int64 
    Volumes *shared.Volumes 
    
}

