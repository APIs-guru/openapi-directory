package shared

type GoogleCloudChannelV1PriceByResourceResourceTypeEnum string

const (
	GoogleCloudChannelV1PriceByResourceResourceTypeEnumResourceTypeUnspecified GoogleCloudChannelV1PriceByResourceResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1PriceByResourceResourceTypeEnumSeat                    GoogleCloudChannelV1PriceByResourceResourceTypeEnum = "SEAT"
	GoogleCloudChannelV1PriceByResourceResourceTypeEnumMau                     GoogleCloudChannelV1PriceByResourceResourceTypeEnum = "MAU"
	GoogleCloudChannelV1PriceByResourceResourceTypeEnumGb                      GoogleCloudChannelV1PriceByResourceResourceTypeEnum = "GB"
	GoogleCloudChannelV1PriceByResourceResourceTypeEnumLicensedUser            GoogleCloudChannelV1PriceByResourceResourceTypeEnum = "LICENSED_USER"
	GoogleCloudChannelV1PriceByResourceResourceTypeEnumMinutes                 GoogleCloudChannelV1PriceByResourceResourceTypeEnum = "MINUTES"
	GoogleCloudChannelV1PriceByResourceResourceTypeEnumIaasUsage               GoogleCloudChannelV1PriceByResourceResourceTypeEnum = "IAAS_USAGE"
	GoogleCloudChannelV1PriceByResourceResourceTypeEnumSubscription            GoogleCloudChannelV1PriceByResourceResourceTypeEnum = "SUBSCRIPTION"
)

type GoogleCloudChannelV1PriceByResource struct {
	Price        *GoogleCloudChannelV1Price                           `json:"price"`
	PricePhases  []GoogleCloudChannelV1PricePhase                     `json:"pricePhases"`
	ResourceType *GoogleCloudChannelV1PriceByResourceResourceTypeEnum `json:"resourceType"`
}
