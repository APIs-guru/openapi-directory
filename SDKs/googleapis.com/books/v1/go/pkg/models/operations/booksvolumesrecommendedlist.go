package operations

import (
"openapi/pkg/models/shared")


type BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum string

const (
    BooksVolumesRecommendedListMaxAllowedMaturityRatingEnumMaxAllowedMaturityRatingUndefined BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
BooksVolumesRecommendedListMaxAllowedMaturityRatingEnumMature BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum = "MATURE"
BooksVolumesRecommendedListMaxAllowedMaturityRatingEnumNotMature BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum = "not-mature"
)


type BooksVolumesRecommendedListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    MaxAllowedMaturityRating *BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum `queryParam:"style=form,explode=true,name=maxAllowedMaturityRating"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BooksVolumesRecommendedListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksVolumesRecommendedListRequest struct {
    QueryParams BooksVolumesRecommendedListQueryParams 
    Security BooksVolumesRecommendedListSecurity 
    
}

type BooksVolumesRecommendedListResponse struct {
    ContentType string 
    StatusCode int64 
    Volumes *shared.Volumes 
    
}

