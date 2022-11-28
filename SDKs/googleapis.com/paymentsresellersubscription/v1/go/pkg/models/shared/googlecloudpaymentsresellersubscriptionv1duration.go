package shared

type GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum = "UNIT_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumMonth           GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum = "MONTH"
	GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay             GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum = "DAY"
)

// GoogleCloudPaymentsResellerSubscriptionV1Duration
// Describes the length of a period of a time.
type GoogleCloudPaymentsResellerSubscriptionV1Duration struct {
	Count *int32                                                     `json:"count,omitempty"`
	Unit  *GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum `json:"unit,omitempty"`
}
