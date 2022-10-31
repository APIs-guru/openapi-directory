package operations

type DeleteLegPathParams struct {
	LegID string `pathParam:"style=simple,explode=false,name=leg_id"`
}

type DeleteLegRequest struct {
	PathParams DeleteLegPathParams
}

type DeleteLegResponse struct {
	ContentType                       string
	StatusCode                        int64
	DeleteLeg200ApplicationJSONObject map[string]interface{}
}
