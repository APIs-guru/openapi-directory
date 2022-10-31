package operations



type GetGenBankNucleotideMappingUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetGenBankNucleotideMappingUsingGetRequest struct {
    PathParams GetGenBankNucleotideMappingUsingGetPathParams 
    
}

type GetGenBankNucleotideMappingUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

