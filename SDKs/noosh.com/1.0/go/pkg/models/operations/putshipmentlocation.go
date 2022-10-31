package operations



type PutShipmentLocationPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    ShipmentID string `pathParam:"style=simple,explode=false,name=shipment_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type PutShipmentLocationRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ApplicationXYaml []byte `request:"mediaType=application/x-yaml"`
    ShipmentLocationPersistVo *interface{} `request:"mediaType=application/json"`
    ShipmentLocationPersistVo1 *interface{} `request:"mediaType=application/x-json-smile"`
    TextCsv []byte `request:"mediaType=text/csv"`
    TextXML []byte `request:"mediaType=text/xml"`
    TextXYaml []byte `request:"mediaType=text/x-yaml"`
    
}

type PutShipmentLocationRequest struct {
    PathParams PutShipmentLocationPathParams 
    Request *PutShipmentLocationRequests 
    
}

type PutShipmentLocationResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    
}

