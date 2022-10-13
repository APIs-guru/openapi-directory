package shared

type GoogleCloudChannelV1PricePhasePeriodTypeEnum string

const (
	GoogleCloudChannelV1PricePhasePeriodTypeEnumPeriodTypeUnspecified GoogleCloudChannelV1PricePhasePeriodTypeEnum = "PERIOD_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1PricePhasePeriodTypeEnumDay                   GoogleCloudChannelV1PricePhasePeriodTypeEnum = "DAY"
	GoogleCloudChannelV1PricePhasePeriodTypeEnumMonth                 GoogleCloudChannelV1PricePhasePeriodTypeEnum = "MONTH"
	GoogleCloudChannelV1PricePhasePeriodTypeEnumYear                  GoogleCloudChannelV1PricePhasePeriodTypeEnum = "YEAR"
)

type GoogleCloudChannelV1PricePhase struct {
	FirstPeriod *int32                                        `json:"firstPeriod"`
	LastPeriod  *int32                                        `json:"lastPeriod"`
	PeriodType  *GoogleCloudChannelV1PricePhasePeriodTypeEnum `json:"periodType"`
	Price       *GoogleCloudChannelV1Price                    `json:"price"`
	PriceTiers  []GoogleCloudChannelV1PriceTier               `json:"priceTiers"`
}
