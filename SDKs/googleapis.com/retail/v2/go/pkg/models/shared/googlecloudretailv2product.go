package shared

type GoogleCloudRetailV2ProductAvailabilityEnum string

const (
	GoogleCloudRetailV2ProductAvailabilityEnumAvailabilityUnspecified GoogleCloudRetailV2ProductAvailabilityEnum = "AVAILABILITY_UNSPECIFIED"
	GoogleCloudRetailV2ProductAvailabilityEnumInStock                 GoogleCloudRetailV2ProductAvailabilityEnum = "IN_STOCK"
	GoogleCloudRetailV2ProductAvailabilityEnumOutOfStock              GoogleCloudRetailV2ProductAvailabilityEnum = "OUT_OF_STOCK"
	GoogleCloudRetailV2ProductAvailabilityEnumPreorder                GoogleCloudRetailV2ProductAvailabilityEnum = "PREORDER"
	GoogleCloudRetailV2ProductAvailabilityEnumBackorder               GoogleCloudRetailV2ProductAvailabilityEnum = "BACKORDER"
)

type GoogleCloudRetailV2ProductTypeEnum string

const (
	GoogleCloudRetailV2ProductTypeEnumTypeUnspecified GoogleCloudRetailV2ProductTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudRetailV2ProductTypeEnumPrimary         GoogleCloudRetailV2ProductTypeEnum = "PRIMARY"
	GoogleCloudRetailV2ProductTypeEnumVariant         GoogleCloudRetailV2ProductTypeEnum = "VARIANT"
	GoogleCloudRetailV2ProductTypeEnumCollection      GoogleCloudRetailV2ProductTypeEnum = "COLLECTION"
)

type GoogleCloudRetailV2Product struct {
	Attributes          map[string]GoogleCloudRetailV2CustomAttribute `json:"attributes,omitempty"`
	Audience            *GoogleCloudRetailV2Audience                  `json:"audience,omitempty"`
	Availability        *GoogleCloudRetailV2ProductAvailabilityEnum   `json:"availability,omitempty"`
	AvailableQuantity   *int32                                        `json:"availableQuantity,omitempty"`
	AvailableTime       *string                                       `json:"availableTime,omitempty"`
	Brands              []string                                      `json:"brands,omitempty"`
	Categories          []string                                      `json:"categories,omitempty"`
	CollectionMemberIds []string                                      `json:"collectionMemberIds,omitempty"`
	ColorInfo           *GoogleCloudRetailV2ColorInfo                 `json:"colorInfo,omitempty"`
	Conditions          []string                                      `json:"conditions,omitempty"`
	Description         *string                                       `json:"description,omitempty"`
	ExpireTime          *string                                       `json:"expireTime,omitempty"`
	FulfillmentInfo     []GoogleCloudRetailV2FulfillmentInfo          `json:"fulfillmentInfo,omitempty"`
	Gtin                *string                                       `json:"gtin,omitempty"`
	ID                  *string                                       `json:"id,omitempty"`
	Images              []GoogleCloudRetailV2Image                    `json:"images,omitempty"`
	LanguageCode        *string                                       `json:"languageCode,omitempty"`
	LocalInventories    []GoogleCloudRetailV2LocalInventory           `json:"localInventories,omitempty"`
	Materials           []string                                      `json:"materials,omitempty"`
	Name                *string                                       `json:"name,omitempty"`
	Patterns            []string                                      `json:"patterns,omitempty"`
	PriceInfo           *GoogleCloudRetailV2PriceInfo                 `json:"priceInfo,omitempty"`
	PrimaryProductID    *string                                       `json:"primaryProductId,omitempty"`
	Promotions          []GoogleCloudRetailV2Promotion                `json:"promotions,omitempty"`
	PublishTime         *string                                       `json:"publishTime,omitempty"`
	Rating              *GoogleCloudRetailV2Rating                    `json:"rating,omitempty"`
	RetrievableFields   *string                                       `json:"retrievableFields,omitempty"`
	Sizes               []string                                      `json:"sizes,omitempty"`
	Tags                []string                                      `json:"tags,omitempty"`
	Title               *string                                       `json:"title,omitempty"`
	TTL                 *string                                       `json:"ttl,omitempty"`
	Type                *GoogleCloudRetailV2ProductTypeEnum           `json:"type,omitempty"`
	URI                 *string                                       `json:"uri,omitempty"`
	Variants            []GoogleCloudRetailV2Product                  `json:"variants,omitempty"`
}
