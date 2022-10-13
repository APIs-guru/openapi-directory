package shared

type GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum = "UNIT_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumMonth           GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum = "MONTH"
	GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay             GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum = "DAY"
)

type GoogleCloudPaymentsResellerSubscriptionV1Duration struct {
	Count *int32                                                     `json:"count"`
	Unit  *GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum `json:"unit"`
}
