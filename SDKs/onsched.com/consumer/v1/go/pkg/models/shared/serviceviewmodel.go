package shared

type ServiceViewModel struct {
	BookAheadUnit            *int32   `json:"bookAheadUnit,omitempty"`
	BookAheadValue           *int32   `json:"bookAheadValue,omitempty"`
	BookInAdvance            *int32   `json:"bookInAdvance,omitempty"`
	BookingInterval          *int32   `json:"bookingInterval,omitempty"`
	BookingLimit             *int32   `json:"bookingLimit,omitempty"`
	CalendarID               *string  `json:"calendarId,omitempty"`
	CalendarResourceGroupID  *string  `json:"calendarResourceGroupId,omitempty"`
	CancellationFeeAmount    *float64 `json:"cancellationFeeAmount,omitempty"`
	CancellationFeeTaxable   *bool    `json:"cancellationFeeTaxable,omitempty"`
	CompanyID                *string  `json:"companyId,omitempty"`
	ConsumerPadding          *bool    `json:"consumerPadding,omitempty"`
	DailyBookingLimitCount   *int32   `json:"dailyBookingLimitCount,omitempty"`
	DailyBookingLimitMinutes *int32   `json:"dailyBookingLimitMinutes,omitempty"`
	DefaultService           *bool    `json:"defaultService,omitempty"`
	Description              *string  `json:"description,omitempty"`
	Duration                 *int32   `json:"duration,omitempty"`
	DurationInterval         *int32   `json:"durationInterval,omitempty"`
	DurationMax              *int32   `json:"durationMax,omitempty"`
	DurationMin              *int32   `json:"durationMin,omitempty"`
	DurationSelect           *bool    `json:"durationSelect,omitempty"`
	FeeAmount                *float64 `json:"feeAmount,omitempty"`
	FeeTaxable               *bool    `json:"feeTaxable,omitempty"`
	ID                       *string  `json:"id,omitempty"`
	ImageURL                 *string  `json:"imageUrl,omitempty"`
	LocationID               *string  `json:"locationId,omitempty"`
	MaxBookingLimit          *int32   `json:"maxBookingLimit,omitempty"`
	MaxCapacity              *int32   `json:"maxCapacity,omitempty"`
	MaxGroupSize             *int32   `json:"maxGroupSize,omitempty"`
	MaxResourceBookingLimit  *int32   `json:"maxResourceBookingLimit,omitempty"`
	MediaPageURL             *string  `json:"mediaPageUrl,omitempty"`
	Name                     *string  `json:"name,omitempty"`
	NonRefundable            *bool    `json:"nonRefundable,omitempty"`
	ObjectName               *string  `json:"objectName,omitempty"`
	Padding                  *int32   `json:"padding,omitempty"`
	RoundRobin               *int32   `json:"roundRobin,omitempty"`
	ServiceGroupID           *int32   `json:"serviceGroupId,omitempty"`
	ServiceGroupName         *string  `json:"serviceGroupName,omitempty"`
	ShowOnline               *bool    `json:"showOnline,omitempty"`
	Type                     *string  `json:"type,omitempty"`
}
