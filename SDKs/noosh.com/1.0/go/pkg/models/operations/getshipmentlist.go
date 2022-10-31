package operations



type GetShipmentListPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetShipmentListRequest struct {
    PathParams GetShipmentListPathParams 
    
}

type GetShipmentListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    ShipmentListVo *interface{} 
    StatusCode int64 
    
}

