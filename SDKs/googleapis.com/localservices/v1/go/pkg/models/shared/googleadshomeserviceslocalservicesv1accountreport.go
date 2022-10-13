package shared

type GoogleAdsHomeservicesLocalservicesV1AccountReport struct {
	AccountID                         *string                                             `json:"accountId"`
	AggregatorInfo                    *GoogleAdsHomeservicesLocalservicesV1AggregatorInfo `json:"aggregatorInfo"`
	AverageFiveStarRating             *float64                                            `json:"averageFiveStarRating"`
	AverageWeeklyBudget               *float64                                            `json:"averageWeeklyBudget"`
	BusinessName                      *string                                             `json:"businessName"`
	CurrencyCode                      *string                                             `json:"currencyCode"`
	CurrentPeriodChargedLeads         *string                                             `json:"currentPeriodChargedLeads"`
	CurrentPeriodConnectedPhoneCalls  *string                                             `json:"currentPeriodConnectedPhoneCalls"`
	CurrentPeriodPhoneCalls           *string                                             `json:"currentPeriodPhoneCalls"`
	CurrentPeriodTotalCost            *float64                                            `json:"currentPeriodTotalCost"`
	ImpressionsLastTwoDays            *string                                             `json:"impressionsLastTwoDays"`
	PhoneLeadResponsiveness           *float64                                            `json:"phoneLeadResponsiveness"`
	PreviousPeriodChargedLeads        *string                                             `json:"previousPeriodChargedLeads"`
	PreviousPeriodConnectedPhoneCalls *string                                             `json:"previousPeriodConnectedPhoneCalls"`
	PreviousPeriodPhoneCalls          *string                                             `json:"previousPeriodPhoneCalls"`
	PreviousPeriodTotalCost           *float64                                            `json:"previousPeriodTotalCost"`
	TotalReview                       *int32                                              `json:"totalReview"`
}
