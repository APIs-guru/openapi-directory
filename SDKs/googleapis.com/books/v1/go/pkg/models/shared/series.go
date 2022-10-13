package shared

type SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo struct {
	AmountInMicros *float64 `json:"amountInMicros"`
	CurrencyCode   *string  `json:"currencyCode"`
	ReleaseNumber  *string  `json:"releaseNumber"`
	ReleaseTime    *string  `json:"releaseTime"`
}

type SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo struct {
	AmountInMicros *float64 `json:"amountInMicros"`
	CurrencyCode   *string  `json:"currencyCode"`
	ReleaseNumber  *string  `json:"releaseNumber"`
	ReleaseTime    *string  `json:"releaseTime"`
}

type SeriesSeriesSeriesSubscriptionReleaseInfo struct {
	CancelTime             *string                                                      `json:"cancelTime"`
	CurrentReleaseInfo     *SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo `json:"currentReleaseInfo"`
	NextReleaseInfo        *SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo    `json:"nextReleaseInfo"`
	SeriesSubscriptionType *string                                                      `json:"seriesSubscriptionType"`
}

type SeriesSeries struct {
	BannerImageURL                *string                                    `json:"bannerImageUrl"`
	EligibleForSubscription       *bool                                      `json:"eligibleForSubscription"`
	ImageURL                      *string                                    `json:"imageUrl"`
	IsComplete                    *bool                                      `json:"isComplete"`
	SeriesFormatType              *string                                    `json:"seriesFormatType"`
	SeriesID                      *string                                    `json:"seriesId"`
	SeriesSubscriptionReleaseInfo *SeriesSeriesSeriesSubscriptionReleaseInfo `json:"seriesSubscriptionReleaseInfo"`
	SeriesType                    *string                                    `json:"seriesType"`
	SubscriptionID                *string                                    `json:"subscriptionId"`
	Title                         *string                                    `json:"title"`
}

type Series struct {
	Kind   *string        `json:"kind"`
	Series []SeriesSeries `json:"series"`
}
