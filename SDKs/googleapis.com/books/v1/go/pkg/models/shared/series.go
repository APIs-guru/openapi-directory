package shared

type SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo struct {
	AmountInMicros *float64 `json:"amountInMicros,omitempty"`
	CurrencyCode   *string  `json:"currencyCode,omitempty"`
	ReleaseNumber  *string  `json:"releaseNumber,omitempty"`
	ReleaseTime    *string  `json:"releaseTime,omitempty"`
}

type SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo struct {
	AmountInMicros *float64 `json:"amountInMicros,omitempty"`
	CurrencyCode   *string  `json:"currencyCode,omitempty"`
	ReleaseNumber  *string  `json:"releaseNumber,omitempty"`
	ReleaseTime    *string  `json:"releaseTime,omitempty"`
}

type SeriesSeriesSeriesSubscriptionReleaseInfo struct {
	CancelTime             *string                                                      `json:"cancelTime,omitempty"`
	CurrentReleaseInfo     *SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo `json:"currentReleaseInfo,omitempty"`
	NextReleaseInfo        *SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo    `json:"nextReleaseInfo,omitempty"`
	SeriesSubscriptionType *string                                                      `json:"seriesSubscriptionType,omitempty"`
}

type SeriesSeries struct {
	BannerImageURL                *string                                    `json:"bannerImageUrl,omitempty"`
	EligibleForSubscription       *bool                                      `json:"eligibleForSubscription,omitempty"`
	ImageURL                      *string                                    `json:"imageUrl,omitempty"`
	IsComplete                    *bool                                      `json:"isComplete,omitempty"`
	SeriesFormatType              *string                                    `json:"seriesFormatType,omitempty"`
	SeriesID                      *string                                    `json:"seriesId,omitempty"`
	SeriesSubscriptionReleaseInfo *SeriesSeriesSeriesSubscriptionReleaseInfo `json:"seriesSubscriptionReleaseInfo,omitempty"`
	SeriesType                    *string                                    `json:"seriesType,omitempty"`
	SubscriptionID                *string                                    `json:"subscriptionId,omitempty"`
	Title                         *string                                    `json:"title,omitempty"`
}

type Series struct {
	Kind   *string        `json:"kind,omitempty"`
	Series []SeriesSeries `json:"series,omitempty"`
}
