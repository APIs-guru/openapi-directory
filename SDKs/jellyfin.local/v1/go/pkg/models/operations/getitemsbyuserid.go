package operations

import (
"time"
"openapi/pkg/models/shared")

type GetItemsByUserIDPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetItemsByUserIDQueryParams struct {
    AdjacentTo *string `queryParam:"style=form,explode=true,name=adjacentTo"`
    AlbumArtistIds []string `queryParam:"style=form,explode=true,name=albumArtistIds"`
    AlbumIds []string `queryParam:"style=form,explode=true,name=albumIds"`
    Albums []string `queryParam:"style=form,explode=true,name=albums"`
    ArtistIds []string `queryParam:"style=form,explode=true,name=artistIds"`
    Artists []string `queryParam:"style=form,explode=true,name=artists"`
    CollapseBoxSetItems *bool `queryParam:"style=form,explode=true,name=collapseBoxSetItems"`
    ContributingArtistIds []string `queryParam:"style=form,explode=true,name=contributingArtistIds"`
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableTotalRecordCount *bool `queryParam:"style=form,explode=true,name=enableTotalRecordCount"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    ExcludeArtistIds []string `queryParam:"style=form,explode=true,name=excludeArtistIds"`
    ExcludeItemIds []string `queryParam:"style=form,explode=true,name=excludeItemIds"`
    ExcludeItemTypes []string `queryParam:"style=form,explode=true,name=excludeItemTypes"`
    ExcludeLocationTypes []shared.LocationTypeEnum `queryParam:"style=form,explode=true,name=excludeLocationTypes"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Filters []shared.ItemFilterEnum `queryParam:"style=form,explode=true,name=filters"`
    GenreIds []string `queryParam:"style=form,explode=true,name=genreIds"`
    Genres []string `queryParam:"style=form,explode=true,name=genres"`
    HasImdbID *bool `queryParam:"style=form,explode=true,name=hasImdbId"`
    HasOfficialRating *bool `queryParam:"style=form,explode=true,name=hasOfficialRating"`
    HasOverview *bool `queryParam:"style=form,explode=true,name=hasOverview"`
    HasParentalRating *bool `queryParam:"style=form,explode=true,name=hasParentalRating"`
    HasSpecialFeature *bool `queryParam:"style=form,explode=true,name=hasSpecialFeature"`
    HasSubtitles *bool `queryParam:"style=form,explode=true,name=hasSubtitles"`
    HasThemeSong *bool `queryParam:"style=form,explode=true,name=hasThemeSong"`
    HasThemeVideo *bool `queryParam:"style=form,explode=true,name=hasThemeVideo"`
    HasTmdbID *bool `queryParam:"style=form,explode=true,name=hasTmdbId"`
    HasTrailer *bool `queryParam:"style=form,explode=true,name=hasTrailer"`
    HasTvdbID *bool `queryParam:"style=form,explode=true,name=hasTvdbId"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    ImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=imageTypes"`
    IncludeItemTypes []string `queryParam:"style=form,explode=true,name=includeItemTypes"`
    Is3D *bool `queryParam:"style=form,explode=true,name=is3D"`
    Is4K *bool `queryParam:"style=form,explode=true,name=is4K"`
    IsFavorite *bool `queryParam:"style=form,explode=true,name=isFavorite"`
    IsHd *bool `queryParam:"style=form,explode=true,name=isHd"`
    IsLocked *bool `queryParam:"style=form,explode=true,name=isLocked"`
    IsMissing *bool `queryParam:"style=form,explode=true,name=isMissing"`
    IsPlaceHolder *bool `queryParam:"style=form,explode=true,name=isPlaceHolder"`
    IsPlayed *bool `queryParam:"style=form,explode=true,name=isPlayed"`
    IsUnaired *bool `queryParam:"style=form,explode=true,name=isUnaired"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    LocationTypes []shared.LocationTypeEnum `queryParam:"style=form,explode=true,name=locationTypes"`
    MaxHeight *int32 `queryParam:"style=form,explode=true,name=maxHeight"`
    MaxOfficialRating *string `queryParam:"style=form,explode=true,name=maxOfficialRating"`
    MaxPremiereDate *time.Time `queryParam:"style=form,explode=true,name=maxPremiereDate"`
    MaxWidth *int32 `queryParam:"style=form,explode=true,name=maxWidth"`
    MediaTypes []string `queryParam:"style=form,explode=true,name=mediaTypes"`
    MinCommunityRating *float64 `queryParam:"style=form,explode=true,name=minCommunityRating"`
    MinCriticRating *float64 `queryParam:"style=form,explode=true,name=minCriticRating"`
    MinDateLastSaved *time.Time `queryParam:"style=form,explode=true,name=minDateLastSaved"`
    MinDateLastSavedForUser *time.Time `queryParam:"style=form,explode=true,name=minDateLastSavedForUser"`
    MinHeight *int32 `queryParam:"style=form,explode=true,name=minHeight"`
    MinOfficialRating *string `queryParam:"style=form,explode=true,name=minOfficialRating"`
    MinPremiereDate *time.Time `queryParam:"style=form,explode=true,name=minPremiereDate"`
    MinWidth *int32 `queryParam:"style=form,explode=true,name=minWidth"`
    NameLessThan *string `queryParam:"style=form,explode=true,name=nameLessThan"`
    NameStartsWith *string `queryParam:"style=form,explode=true,name=nameStartsWith"`
    NameStartsWithOrGreater *string `queryParam:"style=form,explode=true,name=nameStartsWithOrGreater"`
    OfficialRatings []string `queryParam:"style=form,explode=true,name=officialRatings"`
    ParentID *string `queryParam:"style=form,explode=true,name=parentId"`
    ParentIndexNumber *int32 `queryParam:"style=form,explode=true,name=parentIndexNumber"`
    Person *string `queryParam:"style=form,explode=true,name=person"`
    PersonIds []string `queryParam:"style=form,explode=true,name=personIds"`
    PersonTypes []string `queryParam:"style=form,explode=true,name=personTypes"`
    Recursive *bool `queryParam:"style=form,explode=true,name=recursive"`
    SearchTerm *string `queryParam:"style=form,explode=true,name=searchTerm"`
    SeriesStatus []shared.SeriesStatusEnum `queryParam:"style=form,explode=true,name=seriesStatus"`
    SortBy *string `queryParam:"style=form,explode=true,name=sortBy"`
    SortOrder *string `queryParam:"style=form,explode=true,name=sortOrder"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    StudioIds []string `queryParam:"style=form,explode=true,name=studioIds"`
    Studios []string `queryParam:"style=form,explode=true,name=studios"`
    Tags []string `queryParam:"style=form,explode=true,name=tags"`
    VideoTypes []shared.VideoTypeEnum `queryParam:"style=form,explode=true,name=videoTypes"`
    Years []int32 `queryParam:"style=form,explode=true,name=years"`
    
}

type GetItemsByUserIDSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetItemsByUserIDRequest struct {
    PathParams GetItemsByUserIDPathParams 
    QueryParams GetItemsByUserIDQueryParams 
    Security GetItemsByUserIDSecurity 
    
}

type GetItemsByUserIDResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

