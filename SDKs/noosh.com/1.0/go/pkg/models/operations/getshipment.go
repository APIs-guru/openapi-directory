package operations

type GetShipmentPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	ShipmentID  string `pathParam:"style=simple,explode=false,name=shipment_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetShipmentRequest struct {
	PathParams GetShipmentPathParams
}

type GetShipmentResponse struct {
	Body             []byte
	ContentType      string
	HTTPStatusVo     *interface{}
	ShipmentExpandVo *interface{}
	StatusCode       int64
}
