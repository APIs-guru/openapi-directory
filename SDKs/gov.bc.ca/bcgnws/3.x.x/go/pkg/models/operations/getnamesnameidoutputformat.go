package operations




type GetNamesNameIDOutputFormatOutputFormatEnum string

const (
    GetNamesNameIDOutputFormatOutputFormatEnumJSON GetNamesNameIDOutputFormatOutputFormatEnum = "json"
GetNamesNameIDOutputFormatOutputFormatEnumXML GetNamesNameIDOutputFormatOutputFormatEnum = "xml"
GetNamesNameIDOutputFormatOutputFormatEnumKml GetNamesNameIDOutputFormatOutputFormatEnum = "kml"
GetNamesNameIDOutputFormatOutputFormatEnumCsv GetNamesNameIDOutputFormatOutputFormatEnum = "csv"
GetNamesNameIDOutputFormatOutputFormatEnumHTML GetNamesNameIDOutputFormatOutputFormatEnum = "html"
)


type GetNamesNameIDOutputFormatPathParams struct {
    NameID int64 `pathParam:"style=simple,explode=false,name=nameId"`
    OutputFormat GetNamesNameIDOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}

type GetNamesNameIDOutputFormatRequest struct {
    PathParams GetNamesNameIDOutputFormatPathParams 
    
}

type GetNamesNameIDOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

