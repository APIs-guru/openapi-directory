package operations

import (
"openapi/pkg/models/shared")


type BooksVolumesRecommendedRateRatingEnum string

const (
    BooksVolumesRecommendedRateRatingEnumRatingUndefined BooksVolumesRecommendedRateRatingEnum = "RATING_UNDEFINED"
BooksVolumesRecommendedRateRatingEnumHaveIt BooksVolumesRecommendedRateRatingEnum = "HAVE_IT"
BooksVolumesRecommendedRateRatingEnumNotInterested BooksVolumesRecommendedRateRatingEnum = "NOT_INTERESTED"
)


type BooksVolumesRecommendedRateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Rating BooksVolumesRecommendedRateRatingEnum `queryParam:"style=form,explode=true,name=rating"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    VolumeID string `queryParam:"style=form,explode=true,name=volumeId"`
    
}

type BooksVolumesRecommendedRateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BooksVolumesRecommendedRateRequest struct {
    QueryParams BooksVolumesRecommendedRateQueryParams 
    Security BooksVolumesRecommendedRateSecurity 
    
}

type BooksVolumesRecommendedRateResponse struct {
    BooksVolumesRecommendedRateResponse *shared.BooksVolumesRecommendedRateResponse 
    ContentType string 
    StatusCode int64 
    
}

