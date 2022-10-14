package shared

type BillingRateTypeEnum string

const (
	BillingRateTypeEnumAdServing                  BillingRateTypeEnum = "AD_SERVING"
	BillingRateTypeEnumClicks                     BillingRateTypeEnum = "CLICKS"
	BillingRateTypeEnumMinimumService             BillingRateTypeEnum = "MINIMUM_SERVICE"
	BillingRateTypeEnumPathToConversion           BillingRateTypeEnum = "PATH_TO_CONVERSION"
	BillingRateTypeEnumRichMediaInpage            BillingRateTypeEnum = "RICH_MEDIA_INPAGE"
	BillingRateTypeEnumRichMediaExpanding         BillingRateTypeEnum = "RICH_MEDIA_EXPANDING"
	BillingRateTypeEnumRichMediaFloating          BillingRateTypeEnum = "RICH_MEDIA_FLOATING"
	BillingRateTypeEnumRichMediaVideo             BillingRateTypeEnum = "RICH_MEDIA_VIDEO"
	BillingRateTypeEnumRichMediaTeaser            BillingRateTypeEnum = "RICH_MEDIA_TEASER"
	BillingRateTypeEnumRichMediaVpaid             BillingRateTypeEnum = "RICH_MEDIA_VPAID"
	BillingRateTypeEnumInstreamVideo              BillingRateTypeEnum = "INSTREAM_VIDEO"
	BillingRateTypeEnumPixel                      BillingRateTypeEnum = "PIXEL"
	BillingRateTypeEnumTracking                   BillingRateTypeEnum = "TRACKING"
	BillingRateTypeEnumTraffickingFeature         BillingRateTypeEnum = "TRAFFICKING_FEATURE"
	BillingRateTypeEnumCustomReports              BillingRateTypeEnum = "CUSTOM_REPORTS"
	BillingRateTypeEnumExposureToConversion       BillingRateTypeEnum = "EXPOSURE_TO_CONVERSION"
	BillingRateTypeEnumDataTransfer               BillingRateTypeEnum = "DATA_TRANSFER"
	BillingRateTypeEnumDataTransferSetup          BillingRateTypeEnum = "DATA_TRANSFER_SETUP"
	BillingRateTypeEnumStartup                    BillingRateTypeEnum = "STARTUP"
	BillingRateTypeEnumStatementOfWork            BillingRateTypeEnum = "STATEMENT_OF_WORK"
	BillingRateTypeEnumProvidedList               BillingRateTypeEnum = "PROVIDED_LIST"
	BillingRateTypeEnumProvidedListSetup          BillingRateTypeEnum = "PROVIDED_LIST_SETUP"
	BillingRateTypeEnumEnhancedFormats            BillingRateTypeEnum = "ENHANCED_FORMATS"
	BillingRateTypeEnumTrackingAdImpressions      BillingRateTypeEnum = "TRACKING_AD_IMPRESSIONS"
	BillingRateTypeEnumTrackingAdClicks           BillingRateTypeEnum = "TRACKING_AD_CLICKS"
	BillingRateTypeEnumNielsenDigitalAdRatingsFee BillingRateTypeEnum = "NIELSEN_DIGITAL_AD_RATINGS_FEE"
	BillingRateTypeEnumInstreamVideoRedirect      BillingRateTypeEnum = "INSTREAM_VIDEO_REDIRECT"
	BillingRateTypeEnumInstreamVideoVpaid         BillingRateTypeEnum = "INSTREAM_VIDEO_VPAID"
	BillingRateTypeEnumDisplayAdServing           BillingRateTypeEnum = "DISPLAY_AD_SERVING"
	BillingRateTypeEnumVideoAdServing             BillingRateTypeEnum = "VIDEO_AD_SERVING"
	BillingRateTypeEnumAudioAdServing             BillingRateTypeEnum = "AUDIO_AD_SERVING"
	BillingRateTypeEnumAdvancedDisplayAdServing   BillingRateTypeEnum = "ADVANCED_DISPLAY_AD_SERVING"
)

type BillingRateUnitOfMeasureEnum string

const (
	BillingRateUnitOfMeasureEnumCpm BillingRateUnitOfMeasureEnum = "CPM"
	BillingRateUnitOfMeasureEnumCpc BillingRateUnitOfMeasureEnum = "CPC"
	BillingRateUnitOfMeasureEnumEa  BillingRateUnitOfMeasureEnum = "EA"
	BillingRateUnitOfMeasureEnumP2C BillingRateUnitOfMeasureEnum = "P2C"
)

type BillingRate struct {
	CurrencyCode  *string                       `json:"currencyCode,omitempty"`
	EndDate       *string                       `json:"endDate,omitempty"`
	ID            *string                       `json:"id,omitempty"`
	Name          *string                       `json:"name,omitempty"`
	RateInMicros  *string                       `json:"rateInMicros,omitempty"`
	StartDate     *string                       `json:"startDate,omitempty"`
	TieredRates   []BillingRateTieredRate       `json:"tieredRates,omitempty"`
	Type          *BillingRateTypeEnum          `json:"type,omitempty"`
	UnitOfMeasure *BillingRateUnitOfMeasureEnum `json:"unitOfMeasure,omitempty"`
}
