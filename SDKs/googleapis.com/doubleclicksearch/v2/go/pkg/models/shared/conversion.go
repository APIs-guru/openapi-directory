package shared

type Conversion struct {
	AdGroupID                   *string           `json:"adGroupId"`
	AdID                        *string           `json:"adId"`
	AdvertiserID                *string           `json:"advertiserId"`
	AgencyID                    *string           `json:"agencyId"`
	AttributionModel            *string           `json:"attributionModel"`
	CampaignID                  *string           `json:"campaignId"`
	Channel                     *string           `json:"channel"`
	ClickID                     *string           `json:"clickId"`
	ConversionID                *string           `json:"conversionId"`
	ConversionModifiedTimestamp *string           `json:"conversionModifiedTimestamp"`
	ConversionTimestamp         *string           `json:"conversionTimestamp"`
	CountMillis                 *string           `json:"countMillis"`
	CriterionID                 *string           `json:"criterionId"`
	CurrencyCode                *string           `json:"currencyCode"`
	CustomDimension             []CustomDimension `json:"customDimension"`
	CustomMetric                []CustomMetric    `json:"customMetric"`
	DeviceType                  *string           `json:"deviceType"`
	DsConversionID              *string           `json:"dsConversionId"`
	EngineAccountID             *string           `json:"engineAccountId"`
	FloodlightOrderID           *string           `json:"floodlightOrderId"`
	InventoryAccountID          *string           `json:"inventoryAccountId"`
	ProductCountry              *string           `json:"productCountry"`
	ProductGroupID              *string           `json:"productGroupId"`
	ProductID                   *string           `json:"productId"`
	ProductLanguage             *string           `json:"productLanguage"`
	QuantityMillis              *string           `json:"quantityMillis"`
	RevenueMicros               *string           `json:"revenueMicros"`
	SegmentationID              *string           `json:"segmentationId"`
	SegmentationName            *string           `json:"segmentationName"`
	SegmentationType            *string           `json:"segmentationType"`
	State                       *string           `json:"state"`
	StoreID                     *string           `json:"storeId"`
	Type                        *string           `json:"type"`
}
