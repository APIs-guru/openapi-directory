package operations




type TransportationIncentivesLawsOutputFormatEnum string

const (
    TransportationIncentivesLawsOutputFormatEnumJSON TransportationIncentivesLawsOutputFormatEnum = "json"
TransportationIncentivesLawsOutputFormatEnumXML TransportationIncentivesLawsOutputFormatEnum = "xml"
TransportationIncentivesLawsOutputFormatEnumCsv TransportationIncentivesLawsOutputFormatEnum = "csv"
)


type TransportationIncentivesLawsPathParams struct {
    OutputFormat TransportationIncentivesLawsOutputFormatEnum `pathParam:"style=simple,explode=false,name=output_format"`
    
}

type TransportationIncentivesLawsQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Expired *bool `queryParam:"style=form,explode=true,name=expired"`
    IncentiveType *string `queryParam:"style=form,explode=true,name=incentive_type"`
    Jurisdiction *string `queryParam:"style=form,explode=true,name=jurisdiction"`
    Keyword *string `queryParam:"style=form,explode=true,name=keyword"`
    LawType *string `queryParam:"style=form,explode=true,name=law_type"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Local *bool `queryParam:"style=form,explode=true,name=local"`
    Poc *bool `queryParam:"style=form,explode=true,name=poc"`
    Recent *bool `queryParam:"style=form,explode=true,name=recent"`
    RegulationType *string `queryParam:"style=form,explode=true,name=regulation_type"`
    Technology *string `queryParam:"style=form,explode=true,name=technology"`
    UserType *string `queryParam:"style=form,explode=true,name=user_type"`
    
}

type TransportationIncentivesLawsRequest struct {
    PathParams TransportationIncentivesLawsPathParams 
    QueryParams TransportationIncentivesLawsQueryParams 
    
}

type TransportationIncentivesLawsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

