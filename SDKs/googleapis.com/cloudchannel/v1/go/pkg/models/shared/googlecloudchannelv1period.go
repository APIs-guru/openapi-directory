package shared




type GoogleCloudChannelV1PeriodPeriodTypeEnum string

const (
    GoogleCloudChannelV1PeriodPeriodTypeEnumPeriodTypeUnspecified GoogleCloudChannelV1PeriodPeriodTypeEnum = "PERIOD_TYPE_UNSPECIFIED"
GoogleCloudChannelV1PeriodPeriodTypeEnumDay GoogleCloudChannelV1PeriodPeriodTypeEnum = "DAY"
GoogleCloudChannelV1PeriodPeriodTypeEnumMonth GoogleCloudChannelV1PeriodPeriodTypeEnum = "MONTH"
GoogleCloudChannelV1PeriodPeriodTypeEnumYear GoogleCloudChannelV1PeriodPeriodTypeEnum = "YEAR"
)


type GoogleCloudChannelV1Period struct {
    Duration *int32 `json:"duration,omitempty"`
    PeriodType *GoogleCloudChannelV1PeriodPeriodTypeEnum `json:"periodType,omitempty"`
    
}

