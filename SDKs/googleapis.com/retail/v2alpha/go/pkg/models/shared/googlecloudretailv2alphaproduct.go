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
	Attributes          map[string]GoogleCloudRetailV2alphaCustomAttribute `json:"attributes"`
	Audience            *GoogleCloudRetailV2alphaAudience                  `json:"audience"`
	Availability        *GoogleCloudRetailV2alphaProductAvailabilityEnum   `json:"availability"`
	AvailableQuantity   *int32                                             `json:"availableQuantity"`
	AvailableTime       *string                                            `json:"availableTime"`
	Brands              []string                                           `json:"brands"`
	Categories          []string                                           `json:"categories"`
	CollectionMemberIds []string                                           `json:"collectionMemberIds"`
	ColorInfo           *GoogleCloudRetailV2alphaColorInfo                 `json:"colorInfo"`
	Conditions          []string                                           `json:"conditions"`
	Description         *string                                            `json:"description"`
	ExpireTime          *string                                            `json:"expireTime"`
	FulfillmentInfo     []GoogleCloudRetailV2alphaFulfillmentInfo          `json:"fulfillmentInfo"`
	Gtin                *string                                            `json:"gtin"`
	ID                  *string                                            `json:"id"`
	Images              []GoogleCloudRetailV2alphaImage                    `json:"images"`
	LanguageCode        *string                                            `json:"languageCode"`
	LocalInventories    []GoogleCloudRetailV2alphaLocalInventory           `json:"localInventories"`
	Materials           []string                                           `json:"materials"`
	Name                *string                                            `json:"name"`
	Patterns            []string                                           `json:"patterns"`
	PriceInfo           *GoogleCloudRetailV2alphaPriceInfo                 `json:"priceInfo"`
	PrimaryProductID    *string                                            `json:"primaryProductId"`
	Promotions          []GoogleCloudRetailV2alphaPromotion                `json:"promotions"`
	PublishTime         *string                                            `json:"publishTime"`
	Rating              *GoogleCloudRetailV2alphaRating                    `json:"rating"`
	RetrievableFields   *string                                            `json:"retrievableFields"`
	Sizes               []string                                           `json:"sizes"`
	Tags                []string                                           `json:"tags"`
	Title               *string                                            `json:"title"`
	TTL                 *string                                            `json:"ttl"`
	Type                *GoogleCloudRetailV2alphaProductTypeEnum           `json:"type"`
	URI                 *string                                            `json:"uri"`
	Variants            []GoogleCloudRetailV2alphaProduct                  `json:"variants"`
}
