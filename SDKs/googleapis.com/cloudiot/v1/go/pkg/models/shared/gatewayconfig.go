package shared




type GatewayConfigGatewayAuthMethodEnum string

const (
    GatewayConfigGatewayAuthMethodEnumGatewayAuthMethodUnspecified GatewayConfigGatewayAuthMethodEnum = "GATEWAY_AUTH_METHOD_UNSPECIFIED"
GatewayConfigGatewayAuthMethodEnumAssociationOnly GatewayConfigGatewayAuthMethodEnum = "ASSOCIATION_ONLY"
GatewayConfigGatewayAuthMethodEnumDeviceAuthTokenOnly GatewayConfigGatewayAuthMethodEnum = "DEVICE_AUTH_TOKEN_ONLY"
GatewayConfigGatewayAuthMethodEnumAssociationAndDeviceAuthToken GatewayConfigGatewayAuthMethodEnum = "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"
)



type GatewayConfigGatewayTypeEnum string

const (
    GatewayConfigGatewayTypeEnumGatewayTypeUnspecified GatewayConfigGatewayTypeEnum = "GATEWAY_TYPE_UNSPECIFIED"
GatewayConfigGatewayTypeEnumGateway GatewayConfigGatewayTypeEnum = "GATEWAY"
GatewayConfigGatewayTypeEnumNonGateway GatewayConfigGatewayTypeEnum = "NON_GATEWAY"
)


type GatewayConfig struct {
    GatewayAuthMethod *GatewayConfigGatewayAuthMethodEnum `json:"gatewayAuthMethod,omitempty"`
    GatewayType *GatewayConfigGatewayTypeEnum `json:"gatewayType,omitempty"`
    LastAccessedGatewayID *string `json:"lastAccessedGatewayId,omitempty"`
    LastAccessedGatewayTime *string `json:"lastAccessedGatewayTime,omitempty"`
    
}

