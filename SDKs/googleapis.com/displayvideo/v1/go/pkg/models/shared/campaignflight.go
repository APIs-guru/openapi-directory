package shared

type CampaignFlight struct {
	PlannedDates             *DateRange `json:"plannedDates,omitempty"`
	PlannedSpendAmountMicros *string    `json:"plannedSpendAmountMicros,omitempty"`
}
