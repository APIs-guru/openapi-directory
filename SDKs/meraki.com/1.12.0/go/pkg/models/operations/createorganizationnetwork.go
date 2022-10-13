package operations

type CreateOrganizationNetworkPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type CreateOrganizationNetworkRequestBodyProductTypesEnum string

const (
	CreateOrganizationNetworkRequestBodyProductTypesEnumWireless        CreateOrganizationNetworkRequestBodyProductTypesEnum = "wireless"
	CreateOrganizationNetworkRequestBodyProductTypesEnumAppliance       CreateOrganizationNetworkRequestBodyProductTypesEnum = "appliance"
	CreateOrganizationNetworkRequestBodyProductTypesEnumSwitch          CreateOrganizationNetworkRequestBodyProductTypesEnum = "switch"
	CreateOrganizationNetworkRequestBodyProductTypesEnumSystemsManager  CreateOrganizationNetworkRequestBodyProductTypesEnum = "systemsManager"
	CreateOrganizationNetworkRequestBodyProductTypesEnumCamera          CreateOrganizationNetworkRequestBodyProductTypesEnum = "camera"
	CreateOrganizationNetworkRequestBodyProductTypesEnumCellularGateway CreateOrganizationNetworkRequestBodyProductTypesEnum = "cellularGateway"
	CreateOrganizationNetworkRequestBodyProductTypesEnumSensor          CreateOrganizationNetworkRequestBodyProductTypesEnum = "sensor"
	CreateOrganizationNetworkRequestBodyProductTypesEnumEnvironmental   CreateOrganizationNetworkRequestBodyProductTypesEnum = "environmental"
)

type CreateOrganizationNetworkRequestBody struct {
	CopyFromNetworkID *string                                                `json:"copyFromNetworkId"`
	Name              string                                                 `json:"name"`
	Notes             *string                                                `json:"notes"`
	ProductTypes      []CreateOrganizationNetworkRequestBodyProductTypesEnum `json:"productTypes"`
	Tags              []string                                               `json:"tags"`
	TimeZone          *string                                                `json:"timeZone"`
}

type CreateOrganizationNetworkRequest struct {
	PathParams CreateOrganizationNetworkPathParams
	Request    CreateOrganizationNetworkRequestBody `request:"mediaType=application/json"`
}

type CreateOrganizationNetworkResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	CreateOrganizationNetwork201ApplicationJSONObject map[string]interface{}
}
