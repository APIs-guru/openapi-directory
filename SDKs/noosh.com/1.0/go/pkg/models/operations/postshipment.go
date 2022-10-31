package operations



type PostShipmentPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type PostShipmentRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ApplicationXYaml []byte `request:"mediaType=application/x-yaml"`
    ShipmentLocationPostPersistVo *interface{} `request:"mediaType=application/json"`
    ShipmentLocationPostPersistVo1 *interface{} `request:"mediaType=application/x-json-smile"`
    TextCsv []byte `request:"mediaType=text/csv"`
    TextXML []byte `request:"mediaType=text/xml"`
    TextXYaml []byte `request:"mediaType=text/x-yaml"`
    
}

type PostShipmentRequest struct {
    PathParams PostShipmentPathParams 
    Request *PostShipmentRequests 
    
}

type PostShipmentResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    ShipmentLocationsPostResultVo *interface{} 
    StatusCode int64 
    
}

