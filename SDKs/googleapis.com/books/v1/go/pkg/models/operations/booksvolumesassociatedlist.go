package operations

import (
"openapi/pkg/models/shared")

type BooksVolumesAssociatedListPathParams struct {
    VolumeID string `pathParam:"style=simple,explode=false,name=volumeId"`
    
}


type BooksVolumesAssociatedListAssociationEnum string

const (
    BooksVolumesAssociatedListAssociationEnumAssociationUndefined BooksVolumesAssociatedListAssociationEnum = "ASSOCIATION_UNDEFINED"
BooksVolumesAssociatedListAssociationEnumEndOfSample BooksVolumesAssociatedListAssociationEnum = "end-of-sample"
BooksVolumesAssociatedListAssociationEnumEndOfVolume BooksVolumesAssociatedListAssociationEnum = "end-of-volume"
BooksVolumesAssociatedListAssociationEnumRelatedForPlay BooksVolumesAssociatedListAssociationEnum = "related-for-play"
)



type BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum string

const (
    BooksVolumesAssociatedListMaxAllowedMaturityRatingEnumMaxAllowedMaturityRatingUndefined BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
BooksVolumesAssociatedListMaxAllowedMaturityRatingEnumMature BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum = "MATURE"
BooksVolumesAssociatedListMaxAllowedMaturityRatingEnumNotMature BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum = "not-mature"
)


type BooksVolumesAssociatedListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Association *BooksVolumesAssociatedListAssociationEnum `queryParam:"style=form,explode=true,name=association"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    MaxAllowedMaturityRating *BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum `queryParam:"style=form,explode=true,name=maxAllowedMaturityRating"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BooksVolumesAssociatedListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksVolumesAssociatedListRequest struct {
    PathParams BooksVolumesAssociatedListPathParams 
    QueryParams BooksVolumesAssociatedListQueryParams 
    Security BooksVolumesAssociatedListSecurity 
    
}

type BooksVolumesAssociatedListResponse struct {
    ContentType string 
    StatusCode int64 
    Volumes *shared.Volumes 
    
}

