package shared

type GoogleCloudRetailV2betaProductAvailabilityEnum string

const (
	GoogleCloudRetailV2betaProductAvailabilityEnumAvailabilityUnspecified GoogleCloudRetailV2betaProductAvailabilityEnum = "AVAILABILITY_UNSPECIFIED"
	GoogleCloudRetailV2betaProductAvailabilityEnumInStock                 GoogleCloudRetailV2betaProductAvailabilityEnum = "IN_STOCK"
	GoogleCloudRetailV2betaProductAvailabilityEnumOutOfStock              GoogleCloudRetailV2betaProductAvailabilityEnum = "OUT_OF_STOCK"
	GoogleCloudRetailV2betaProductAvailabilityEnumPreorder                GoogleCloudRetailV2betaProductAvailabilityEnum = "PREORDER"
	GoogleCloudRetailV2betaProductAvailabilityEnumBackorder               GoogleCloudRetailV2betaProductAvailabilityEnum = "BACKORDER"
)

type GoogleCloudRetailV2betaProductTypeEnum string

const (
	GoogleCloudRetailV2betaProductTypeEnumTypeUnspecified GoogleCloudRetailV2betaProductTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudRetailV2betaProductTypeEnumPrimary         GoogleCloudRetailV2betaProductTypeEnum = "PRIMARY"
	GoogleCloudRetailV2betaProductTypeEnumVariant         GoogleCloudRetailV2betaProductTypeEnum = "VARIANT"
	GoogleCloudRetailV2betaProductTypeEnumCollection      GoogleCloudRetailV2betaProductTypeEnum = "COLLECTION"
)

type GoogleCloudRetailV2betaProduct struct {
	Attributes          map[string]GoogleCloudRetailV2betaCustomAttribute `json:"attributes,omitempty"`
	Audience            *GoogleCloudRetailV2betaAudience                  `json:"audience,omitempty"`
	Availability        *GoogleCloudRetailV2betaProductAvailabilityEnum   `json:"availability,omitempty"`
	AvailableQuantity   *int32                                            `json:"availableQuantity,omitempty"`
	AvailableTime       *string                                           `json:"availableTime,omitempty"`
	Brands              []string                                          `json:"brands,omitempty"`
	Categories          []string                                          `json:"categories,omitempty"`
	CollectionMemberIds []string                                          `json:"collectionMemberIds,omitempty"`
	ColorInfo           *GoogleCloudRetailV2betaColorInfo                 `json:"colorInfo,omitempty"`
	Conditions          []string                                          `json:"conditions,omitempty"`
	Description         *string                                           `json:"description,omitempty"`
	ExpireTime          *string                                           `json:"expireTime,omitempty"`
	FulfillmentInfo     []GoogleCloudRetailV2betaFulfillmentInfo          `json:"fulfillmentInfo,omitempty"`
	Gtin                *string                                           `json:"gtin,omitempty"`
	ID                  *string                                           `json:"id,omitempty"`
	Images              []GoogleCloudRetailV2betaImage                    `json:"images,omitempty"`
	LanguageCode        *string                                           `json:"languageCode,omitempty"`
	LocalInventories    []GoogleCloudRetailV2betaLocalInventory           `json:"localInventories,omitempty"`
	Materials           []string                                          `json:"materials,omitempty"`
	Name                *string                                           `json:"name,omitempty"`
	Patterns            []string                                          `json:"patterns,omitempty"`
	PriceInfo           *GoogleCloudRetailV2betaPriceInfo                 `json:"priceInfo,omitempty"`
	PrimaryProductID    *string                                           `json:"primaryProductId,omitempty"`
	Promotions          []GoogleCloudRetailV2betaPromotion                `json:"promotions,omitempty"`
	PublishTime         *string                                           `json:"publishTime,omitempty"`
	Rating              *GoogleCloudRetailV2betaRating                    `json:"rating,omitempty"`
	RetrievableFields   *string                                           `json:"retrievableFields,omitempty"`
	Sizes               []string                                          `json:"sizes,omitempty"`
	Tags                []string                                          `json:"tags,omitempty"`
	Title               *string                                           `json:"title,omitempty"`
	TTL                 *string                                           `json:"ttl,omitempty"`
	Type                *GoogleCloudRetailV2betaProductTypeEnum           `json:"type,omitempty"`
	URI                 *string                                           `json:"uri,omitempty"`
	Variants            []GoogleCloudRetailV2betaProduct                  `json:"variants,omitempty"`
}
