package shared

type ServiceViewModel struct {
	BookAheadUnit            *int32   `json:"bookAheadUnit"`
	BookAheadValue           *int32   `json:"bookAheadValue"`
	BookInAdvance            *int32   `json:"bookInAdvance"`
	BookingInterval          *int32   `json:"bookingInterval"`
	BookingLimit             *int32   `json:"bookingLimit"`
	CalendarID               *string  `json:"calendarId"`
	CalendarResourceGroupID  *string  `json:"calendarResourceGroupId"`
	CancellationFeeAmount    *float64 `json:"cancellationFeeAmount"`
	CancellationFeeTaxable   *bool    `json:"cancellationFeeTaxable"`
	CompanyID                *string  `json:"companyId"`
	ConsumerPadding          *bool    `json:"consumerPadding"`
	DailyBookingLimitCount   *int32   `json:"dailyBookingLimitCount"`
	DailyBookingLimitMinutes *int32   `json:"dailyBookingLimitMinutes"`
	DefaultService           *bool    `json:"defaultService"`
	Description              *string  `json:"description"`
	Duration                 *int32   `json:"duration"`
	DurationInterval         *int32   `json:"durationInterval"`
	DurationMax              *int32   `json:"durationMax"`
	DurationMin              *int32   `json:"durationMin"`
	DurationSelect           *bool    `json:"durationSelect"`
	FeeAmount                *float64 `json:"feeAmount"`
	FeeTaxable               *bool    `json:"feeTaxable"`
	ID                       *string  `json:"id"`
	ImageURL                 *string  `json:"imageUrl"`
	LocationID               *string  `json:"locationId"`
	MaxBookingLimit          *int32   `json:"maxBookingLimit"`
	MaxCapacity              *int32   `json:"maxCapacity"`
	MaxGroupSize             *int32   `json:"maxGroupSize"`
	MaxResourceBookingLimit  *int32   `json:"maxResourceBookingLimit"`
	MediaPageURL             *string  `json:"mediaPageUrl"`
	Name                     *string  `json:"name"`
	NonRefundable            *bool    `json:"nonRefundable"`
	ObjectName               *string  `json:"objectName"`
	Padding                  *int32   `json:"padding"`
	RoundRobin               *int32   `json:"roundRobin"`
	ServiceGroupID           *int32   `json:"serviceGroupId"`
	ServiceGroupName         *string  `json:"serviceGroupName"`
	ShowOnline               *bool    `json:"showOnline"`
	Type                     *string  `json:"type"`
}
