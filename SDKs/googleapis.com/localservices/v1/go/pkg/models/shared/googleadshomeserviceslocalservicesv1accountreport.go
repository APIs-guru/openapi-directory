package shared

// GoogleAdsHomeservicesLocalservicesV1AccountReport
// An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18
type GoogleAdsHomeservicesLocalservicesV1AccountReport struct {
	AccountID                         *string                                             `json:"accountId,omitempty"`
	AggregatorInfo                    *GoogleAdsHomeservicesLocalservicesV1AggregatorInfo `json:"aggregatorInfo,omitempty"`
	AverageFiveStarRating             *float64                                            `json:"averageFiveStarRating,omitempty"`
	AverageWeeklyBudget               *float64                                            `json:"averageWeeklyBudget,omitempty"`
	BusinessName                      *string                                             `json:"businessName,omitempty"`
	CurrencyCode                      *string                                             `json:"currencyCode,omitempty"`
	CurrentPeriodChargedLeads         *string                                             `json:"currentPeriodChargedLeads,omitempty"`
	CurrentPeriodConnectedPhoneCalls  *string                                             `json:"currentPeriodConnectedPhoneCalls,omitempty"`
	CurrentPeriodPhoneCalls           *string                                             `json:"currentPeriodPhoneCalls,omitempty"`
	CurrentPeriodTotalCost            *float64                                            `json:"currentPeriodTotalCost,omitempty"`
	ImpressionsLastTwoDays            *string                                             `json:"impressionsLastTwoDays,omitempty"`
	PhoneLeadResponsiveness           *float64                                            `json:"phoneLeadResponsiveness,omitempty"`
	PreviousPeriodChargedLeads        *string                                             `json:"previousPeriodChargedLeads,omitempty"`
	PreviousPeriodConnectedPhoneCalls *string                                             `json:"previousPeriodConnectedPhoneCalls,omitempty"`
	PreviousPeriodPhoneCalls          *string                                             `json:"previousPeriodPhoneCalls,omitempty"`
	PreviousPeriodTotalCost           *float64                                            `json:"previousPeriodTotalCost,omitempty"`
	TotalReview                       *int32                                              `json:"totalReview,omitempty"`
}
