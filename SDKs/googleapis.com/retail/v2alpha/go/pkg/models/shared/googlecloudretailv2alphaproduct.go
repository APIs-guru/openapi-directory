package shared

type GoogleCloudRetailV2alphaProductAvailabilityEnum string

const (
	GoogleCloudRetailV2alphaProductAvailabilityEnumAvailabilityUnspecified GoogleCloudRetailV2alphaProductAvailabilityEnum = "AVAILABILITY_UNSPECIFIED"
	GoogleCloudRetailV2alphaProductAvailabilityEnumInStock                 GoogleCloudRetailV2alphaProductAvailabilityEnum = "IN_STOCK"
	GoogleCloudRetailV2alphaProductAvailabilityEnumOutOfStock              GoogleCloudRetailV2alphaProductAvailabilityEnum = "OUT_OF_STOCK"
	GoogleCloudRetailV2alphaProductAvailabilityEnumPreorder                GoogleCloudRetailV2alphaProductAvailabilityEnum = "PREORDER"
	GoogleCloudRetailV2alphaProductAvailabilityEnumBackorder               GoogleCloudRetailV2alphaProductAvailabilityEnum = "BACKORDER"
)

type GoogleCloudRetailV2alphaProductTypeEnum string

const (
	GoogleCloudRetailV2alphaProductTypeEnumTypeUnspecified GoogleCloudRetailV2alphaProductTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudRetailV2alphaProductTypeEnumPrimary         GoogleCloudRetailV2alphaProductTypeEnum = "PRIMARY"
	GoogleCloudRetailV2alphaProductTypeEnumVariant         GoogleCloudRetailV2alphaProductTypeEnum = "VARIANT"
	GoogleCloudRetailV2alphaProductTypeEnumCollection      GoogleCloudRetailV2alphaProductTypeEnum = "COLLECTION"
)

type GoogleCloudRetailV2alphaProduct struct {
	Attributes          map[string]GoogleCloudRetailV2alphaCustomAttribute `json:"attributes,omitempty"`
	Audience            *GoogleCloudRetailV2alphaAudience                  `json:"audience,omitempty"`
	Availability        *GoogleCloudRetailV2alphaProductAvailabilityEnum   `json:"availability,omitempty"`
	AvailableQuantity   *int32                                             `json:"availableQuantity,omitempty"`
	AvailableTime       *string                                            `json:"availableTime,omitempty"`
	Brands              []string                                           `json:"brands,omitempty"`
	Categories          []string                                           `json:"categories,omitempty"`
	CollectionMemberIds []string                                           `json:"collectionMemberIds,omitempty"`
	ColorInfo           *GoogleCloudRetailV2alphaColorInfo                 `json:"colorInfo,omitempty"`
	Conditions          []string                                           `json:"conditions,omitempty"`
	Description         *string                                            `json:"description,omitempty"`
	ExpireTime          *string                                            `json:"expireTime,omitempty"`
	FulfillmentInfo     []GoogleCloudRetailV2alphaFulfillmentInfo          `json:"fulfillmentInfo,omitempty"`
	Gtin                *string                                            `json:"gtin,omitempty"`
	ID                  *string                                            `json:"id,omitempty"`
	Images              []GoogleCloudRetailV2alphaImage                    `json:"images,omitempty"`
	LanguageCode        *string                                            `json:"languageCode,omitempty"`
	LocalInventories    []GoogleCloudRetailV2alphaLocalInventory           `json:"localInventories,omitempty"`
	Materials           []string                                           `json:"materials,omitempty"`
	Name                *string                                            `json:"name,omitempty"`
	Patterns            []string                                           `json:"patterns,omitempty"`
	PriceInfo           *GoogleCloudRetailV2alphaPriceInfo                 `json:"priceInfo,omitempty"`
	PrimaryProductID    *string                                            `json:"primaryProductId,omitempty"`
	Promotions          []GoogleCloudRetailV2alphaPromotion                `json:"promotions,omitempty"`
	PublishTime         *string                                            `json:"publishTime,omitempty"`
	Rating              *GoogleCloudRetailV2alphaRating                    `json:"rating,omitempty"`
	RetrievableFields   *string                                            `json:"retrievableFields,omitempty"`
	Sizes               []string                                           `json:"sizes,omitempty"`
	Tags                []string                                           `json:"tags,omitempty"`
	Title               *string                                            `json:"title,omitempty"`
	TTL                 *string                                            `json:"ttl,omitempty"`
	Type                *GoogleCloudRetailV2alphaProductTypeEnum           `json:"type,omitempty"`
	URI                 *string                                            `json:"uri,omitempty"`
	Variants            []GoogleCloudRetailV2alphaProduct                  `json:"variants,omitempty"`
}
