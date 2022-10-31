package shared

type Conversion struct {
	AdGroupID                   *string           `json:"adGroupId,omitempty"`
	AdID                        *string           `json:"adId,omitempty"`
	AdvertiserID                *string           `json:"advertiserId,omitempty"`
	AgencyID                    *string           `json:"agencyId,omitempty"`
	AttributionModel            *string           `json:"attributionModel,omitempty"`
	CampaignID                  *string           `json:"campaignId,omitempty"`
	Channel                     *string           `json:"channel,omitempty"`
	ClickID                     *string           `json:"clickId,omitempty"`
	ConversionID                *string           `json:"conversionId,omitempty"`
	ConversionModifiedTimestamp *string           `json:"conversionModifiedTimestamp,omitempty"`
	ConversionTimestamp         *string           `json:"conversionTimestamp,omitempty"`
	CountMillis                 *string           `json:"countMillis,omitempty"`
	CriterionID                 *string           `json:"criterionId,omitempty"`
	CurrencyCode                *string           `json:"currencyCode,omitempty"`
	CustomDimension             []CustomDimension `json:"customDimension,omitempty"`
	CustomMetric                []CustomMetric    `json:"customMetric,omitempty"`
	CustomerID                  *string           `json:"customerId,omitempty"`
	DeviceType                  *string           `json:"deviceType,omitempty"`
	DsConversionID              *string           `json:"dsConversionId,omitempty"`
	EngineAccountID             *string           `json:"engineAccountId,omitempty"`
	FloodlightOrderID           *string           `json:"floodlightOrderId,omitempty"`
	InventoryAccountID          *string           `json:"inventoryAccountId,omitempty"`
	ProductCountry              *string           `json:"productCountry,omitempty"`
	ProductGroupID              *string           `json:"productGroupId,omitempty"`
	ProductID                   *string           `json:"productId,omitempty"`
	ProductLanguage             *string           `json:"productLanguage,omitempty"`
	QuantityMillis              *string           `json:"quantityMillis,omitempty"`
	RevenueMicros               *string           `json:"revenueMicros,omitempty"`
	SegmentationID              *string           `json:"segmentationId,omitempty"`
	SegmentationName            *string           `json:"segmentationName,omitempty"`
	SegmentationType            *string           `json:"segmentationType,omitempty"`
	State                       *string           `json:"state,omitempty"`
	StoreID                     *string           `json:"storeId,omitempty"`
	Type                        *string           `json:"type,omitempty"`
}
