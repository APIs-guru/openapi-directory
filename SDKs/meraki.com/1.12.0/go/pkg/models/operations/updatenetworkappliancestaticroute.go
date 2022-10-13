package operations

type UpdateNetworkApplianceStaticRoutePathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
}

type UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges struct {
	Comment string `json:"comment"`
	End     string `json:"end"`
	Start   string `json:"start"`
}

type UpdateNetworkApplianceStaticRouteRequestBody struct {
	Enabled            *bool                                                          `json:"enabled"`
	FixedIPAssignments map[string]interface{}                                         `json:"fixedIpAssignments"`
	GatewayIP          *string                                                        `json:"gatewayIp"`
	Name               *string                                                        `json:"name"`
	ReservedIPRanges   []UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges `json:"reservedIpRanges"`
	Subnet             *string                                                        `json:"subnet"`
}

type UpdateNetworkApplianceStaticRouteRequest struct {
	PathParams UpdateNetworkApplianceStaticRoutePathParams
	Request    *UpdateNetworkApplianceStaticRouteRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceStaticRouteResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	UpdateNetworkApplianceStaticRoute200ApplicationJSONObject map[string]interface{}
}
