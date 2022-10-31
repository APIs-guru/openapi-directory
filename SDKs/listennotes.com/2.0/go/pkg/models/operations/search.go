package operations

import (
"openapi/pkg/models/shared")


type SearchTypeEnum string

const (
    SearchTypeEnumEpisode SearchTypeEnum = "episode"
SearchTypeEnumPodcast SearchTypeEnum = "podcast"
SearchTypeEnumCurated SearchTypeEnum = "curated"
)


type SearchQueryParams struct {
    EpisodeCountMax *int64 `queryParam:"style=form,explode=true,name=episode_count_max"`
    EpisodeCountMin *int64 `queryParam:"style=form,explode=true,name=episode_count_min"`
    GenreIds *string `queryParam:"style=form,explode=true,name=genre_ids"`
    Language *string `queryParam:"style=form,explode=true,name=language"`
    LenMax *int64 `queryParam:"style=form,explode=true,name=len_max"`
    LenMin *int64 `queryParam:"style=form,explode=true,name=len_min"`
    Ncid *string `queryParam:"style=form,explode=true,name=ncid"`
    Ocid *string `queryParam:"style=form,explode=true,name=ocid"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    OnlyIn *string `queryParam:"style=form,explode=true,name=only_in"`
    PublishedAfter *int64 `queryParam:"style=form,explode=true,name=published_after"`
    PublishedBefore *int64 `queryParam:"style=form,explode=true,name=published_before"`
    Q string `queryParam:"style=form,explode=true,name=q"`
    Region *string `queryParam:"style=form,explode=true,name=region"`
    SafeMode *int64 `queryParam:"style=form,explode=true,name=safe_mode"`
    SortByDate *int64 `queryParam:"style=form,explode=true,name=sort_by_date"`
    Type *SearchTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type SearchHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type SearchRequest struct {
    QueryParams SearchQueryParams 
    Headers SearchHeaders 
    
}

type SearchResponse struct {
    ContentType string 
    Headers map[string][]string 
    SearchResponse *shared.SearchResponse 
    StatusCode int64 
    
}

