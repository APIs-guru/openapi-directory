package operations

import (
"time")


type OpenSearchSortKeysEnum string

const (
    OpenSearchSortKeysEnumScoreDesc OpenSearchSortKeysEnum = "score,,desc"
OpenSearchSortKeysEnumSpatialAreaAsc OpenSearchSortKeysEnum = "spatial_area,,asc"
OpenSearchSortKeysEnumSpatialAreaDesc OpenSearchSortKeysEnum = "spatial_area,,desc"
OpenSearchSortKeysEnumTemporalDurationAsc OpenSearchSortKeysEnum = "temporal_duration,,asc"
OpenSearchSortKeysEnumTemporalDurationDesc OpenSearchSortKeysEnum = "temporal_duration,,desc"
OpenSearchSortKeysEnumUpdatedDesc OpenSearchSortKeysEnum = "updated,,desc"
)



type OpenSearchSourceEnum string

const (
    OpenSearchSourceEnumNsidc OpenSearchSourceEnum = "NSIDC"
OpenSearchSourceEnumAde OpenSearchSourceEnum = "ADE"
)


type OpenSearchQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    EndDate *time.Time `queryParam:"style=form,explode=true,name=endDate"`
    FacetFilters *string `queryParam:"style=form,explode=true,name=facetFilters"`
    SearchTerms *string `queryParam:"style=form,explode=true,name=searchTerms"`
    SortKeys *OpenSearchSortKeysEnum `queryParam:"style=form,explode=true,name=sortKeys"`
    Source *OpenSearchSourceEnum `queryParam:"style=form,explode=true,name=source"`
    Spatial *string `queryParam:"style=form,explode=true,name=spatial"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=startDate"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    
}

type OpenSearchRequest struct {
    QueryParams OpenSearchQueryParams 
    
}

type OpenSearchResponse struct {
    ContentType string 
    StatusCode int64 
    OpenSearch200ApplicationAtomPlusXMLString *string 
    
}

