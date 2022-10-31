package operations




type GetJurisdictionFormatEnum string

const (
    GetJurisdictionFormatEnumJSON GetJurisdictionFormatEnum = "json"
GetJurisdictionFormatEnumXML GetJurisdictionFormatEnum = "xml"
)


type GetJurisdictionQueryParams struct {
    Format *GetJurisdictionFormatEnum `queryParam:"style=form,explode=true,name=format"`
    
}

type GetJurisdictionRequest struct {
    QueryParams GetJurisdictionQueryParams 
    
}

type GetJurisdictionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

