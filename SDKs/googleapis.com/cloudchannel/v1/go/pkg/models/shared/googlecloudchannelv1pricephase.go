package shared

type GoogleCloudChannelV1PricePhasePeriodTypeEnum string

const (
	GoogleCloudChannelV1PricePhasePeriodTypeEnumPeriodTypeUnspecified GoogleCloudChannelV1PricePhasePeriodTypeEnum = "PERIOD_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1PricePhasePeriodTypeEnumDay                   GoogleCloudChannelV1PricePhasePeriodTypeEnum = "DAY"
	GoogleCloudChannelV1PricePhasePeriodTypeEnumMonth                 GoogleCloudChannelV1PricePhasePeriodTypeEnum = "MONTH"
	GoogleCloudChannelV1PricePhasePeriodTypeEnumYear                  GoogleCloudChannelV1PricePhasePeriodTypeEnum = "YEAR"
)

type GoogleCloudChannelV1PricePhase struct {
	FirstPeriod *int32                                        `json:"firstPeriod,omitempty"`
	LastPeriod  *int32                                        `json:"lastPeriod,omitempty"`
	PeriodType  *GoogleCloudChannelV1PricePhasePeriodTypeEnum `json:"periodType,omitempty"`
	Price       *GoogleCloudChannelV1Price                    `json:"price,omitempty"`
	PriceTiers  []GoogleCloudChannelV1PriceTier               `json:"priceTiers,omitempty"`
}
