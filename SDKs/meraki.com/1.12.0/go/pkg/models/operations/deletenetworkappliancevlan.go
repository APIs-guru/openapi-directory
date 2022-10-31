package operations

type DeleteNetworkApplianceVlanPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	VlanID    string `pathParam:"style=simple,explode=false,name=vlanId"`
}

type DeleteNetworkApplianceVlanRequest struct {
	PathParams DeleteNetworkApplianceVlanPathParams
}

type DeleteNetworkApplianceVlanResponse struct {
	ContentType string
	StatusCode  int64
}
