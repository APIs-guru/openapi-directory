package shared




type SortedDimensionSortOrderEnum string

const (
    SortedDimensionSortOrderEnumAscending SortedDimensionSortOrderEnum = "ASCENDING"
SortedDimensionSortOrderEnumDescending SortedDimensionSortOrderEnum = "DESCENDING"
)


type SortedDimension struct {
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    SortOrder *SortedDimensionSortOrderEnum `json:"sortOrder,omitempty"`
    
}

