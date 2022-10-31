package operations




type GetParcelsPidsSiteIDOutputFormatOutputFormatEnum string

const (
    GetParcelsPidsSiteIDOutputFormatOutputFormatEnumJSON GetParcelsPidsSiteIDOutputFormatOutputFormatEnum = "json"
GetParcelsPidsSiteIDOutputFormatOutputFormatEnumGeojson GetParcelsPidsSiteIDOutputFormatOutputFormatEnum = "geojson"
GetParcelsPidsSiteIDOutputFormatOutputFormatEnumXhtml GetParcelsPidsSiteIDOutputFormatOutputFormatEnum = "xhtml"
GetParcelsPidsSiteIDOutputFormatOutputFormatEnumKml GetParcelsPidsSiteIDOutputFormatOutputFormatEnum = "kml"
GetParcelsPidsSiteIDOutputFormatOutputFormatEnumGml GetParcelsPidsSiteIDOutputFormatOutputFormatEnum = "gml"
GetParcelsPidsSiteIDOutputFormatOutputFormatEnumCsv GetParcelsPidsSiteIDOutputFormatOutputFormatEnum = "csv"
GetParcelsPidsSiteIDOutputFormatOutputFormatEnumShpz GetParcelsPidsSiteIDOutputFormatOutputFormatEnum = "shpz"
)


type GetParcelsPidsSiteIDOutputFormatPathParams struct {
    OutputFormat GetParcelsPidsSiteIDOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    SiteID string `pathParam:"style=simple,explode=false,name=siteID"`
    
}

type GetParcelsPidsSiteIDOutputFormatRequest struct {
    PathParams GetParcelsPidsSiteIDOutputFormatPathParams 
    
}

type GetParcelsPidsSiteIDOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

