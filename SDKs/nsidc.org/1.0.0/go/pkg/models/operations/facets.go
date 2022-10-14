package operations

import (
	"time"
)

type FacetsSortKeysEnum string

const (
	FacetsSortKeysEnumScoreDesc            FacetsSortKeysEnum = "score,,desc"
	FacetsSortKeysEnumSpatialAreaAsc       FacetsSortKeysEnum = "spatial_area,,asc"
	FacetsSortKeysEnumSpatialAreaDesc      FacetsSortKeysEnum = "spatial_area,,desc"
	FacetsSortKeysEnumTemporalDurationAsc  FacetsSortKeysEnum = "temporal_duration,,asc"
	FacetsSortKeysEnumTemporalDurationDesc FacetsSortKeysEnum = "temporal_duration,,desc"
	FacetsSortKeysEnumUpdatedDesc          FacetsSortKeysEnum = "updated,,desc"
)

type FacetsSourceEnum string

const (
	FacetsSourceEnumNsidc FacetsSourceEnum = "NSIDC"
	FacetsSourceEnumAde   FacetsSourceEnum = "ADE"
)

type FacetsQueryParams struct {
	Count        *int64              `queryParam:"style=form,explode=true,name=count"`
	EndDate      *time.Time          `queryParam:"style=form,explode=true,name=endDate"`
	FacetFilters *string             `queryParam:"style=form,explode=true,name=facetFilters"`
	SearchTerms  *string             `queryParam:"style=form,explode=true,name=searchTerms"`
	SortKeys     *FacetsSortKeysEnum `queryParam:"style=form,explode=true,name=sortKeys"`
	Source       *FacetsSourceEnum   `queryParam:"style=form,explode=true,name=source"`
	Spatial      *string             `queryParam:"style=form,explode=true,name=spatial"`
	StartDate    *time.Time          `queryParam:"style=form,explode=true,name=startDate"`
	StartIndex   *int64              `queryParam:"style=form,explode=true,name=startIndex"`
}

type FacetsRequest struct {
	QueryParams FacetsQueryParams
}

type FacetsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	Facets200ApplicationNsidcfacetsPlusXMLString *string
}
