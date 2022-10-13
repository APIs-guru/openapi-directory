package shared

type CampaignFlight struct {
	PlannedDates             *DateRange `json:"plannedDates"`
	PlannedSpendAmountMicros *string    `json:"plannedSpendAmountMicros"`
}
