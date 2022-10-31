package operations



type GetAnnotationsByRgdIDAndOntologyUsingGetPathParams struct {
    OntologyPrefix string `pathParam:"style=simple,explode=false,name=ontologyPrefix"`
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetAnnotationsByRgdIDAndOntologyUsingGetRequest struct {
    PathParams GetAnnotationsByRgdIDAndOntologyUsingGetPathParams 
    
}

type GetAnnotationsByRgdIDAndOntologyUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

