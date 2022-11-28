package shared

// CampaignFlight
// Settings that track the planned spend and duration of a campaign.
type CampaignFlight struct {
	PlannedDates             *DateRange `json:"plannedDates,omitempty"`
	PlannedSpendAmountMicros *string    `json:"plannedSpendAmountMicros,omitempty"`
}
