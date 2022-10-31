package operations




type GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum string

const (
    GetIntersectionsIntersectionIDOutputFormatOutputFormatEnumJSON GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum = "json"
GetIntersectionsIntersectionIDOutputFormatOutputFormatEnumGeojson GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum = "geojson"
GetIntersectionsIntersectionIDOutputFormatOutputFormatEnumXhtml GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum = "xhtml"
GetIntersectionsIntersectionIDOutputFormatOutputFormatEnumKml GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum = "kml"
GetIntersectionsIntersectionIDOutputFormatOutputFormatEnumGml GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum = "gml"
GetIntersectionsIntersectionIDOutputFormatOutputFormatEnumCsv GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum = "csv"
GetIntersectionsIntersectionIDOutputFormatOutputFormatEnumShpz GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum = "shpz"
)


type GetIntersectionsIntersectionIDOutputFormatPathParams struct {
    IntersectionID string `pathParam:"style=simple,explode=false,name=intersectionID"`
    OutputFormat GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}

type GetIntersectionsIntersectionIDOutputFormatQueryParams struct {
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    
}

type GetIntersectionsIntersectionIDOutputFormatRequest struct {
    PathParams GetIntersectionsIntersectionIDOutputFormatPathParams 
    QueryParams GetIntersectionsIntersectionIDOutputFormatQueryParams 
    
}

type GetIntersectionsIntersectionIDOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

