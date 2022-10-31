package operations

import (
"openapi/pkg/models/shared")


type BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum string

const (
    BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnumMaxAllowedMaturityRatingUndefined BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnumMature BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum = "MATURE"
BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnumNotMature BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum = "not-mature"
)


type BooksOnboardingListCategoryVolumesQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CategoryID []string `queryParam:"style=form,explode=true,name=categoryId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    MaxAllowedMaturityRating *BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum `queryParam:"style=form,explode=true,name=maxAllowedMaturityRating"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BooksOnboardingListCategoryVolumesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksOnboardingListCategoryVolumesRequest struct {
    QueryParams BooksOnboardingListCategoryVolumesQueryParams 
    Security BooksOnboardingListCategoryVolumesSecurity 
    
}

type BooksOnboardingListCategoryVolumesResponse struct {
    ContentType string 
    StatusCode int64 
    Volume2 *shared.Volume2 
    
}

