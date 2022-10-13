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
	Attributes          map[string]GoogleCloudRetailV2betaCustomAttribute `json:"attributes"`
	Audience            *GoogleCloudRetailV2betaAudience                  `json:"audience"`
	Availability        *GoogleCloudRetailV2betaProductAvailabilityEnum   `json:"availability"`
	AvailableQuantity   *int32                                            `json:"availableQuantity"`
	AvailableTime       *string                                           `json:"availableTime"`
	Brands              []string                                          `json:"brands"`
	Categories          []string                                          `json:"categories"`
	CollectionMemberIds []string                                          `json:"collectionMemberIds"`
	ColorInfo           *GoogleCloudRetailV2betaColorInfo                 `json:"colorInfo"`
	Conditions          []string                                          `json:"conditions"`
	Description         *string                                           `json:"description"`
	ExpireTime          *string                                           `json:"expireTime"`
	FulfillmentInfo     []GoogleCloudRetailV2betaFulfillmentInfo          `json:"fulfillmentInfo"`
	Gtin                *string                                           `json:"gtin"`
	ID                  *string                                           `json:"id"`
	Images              []GoogleCloudRetailV2betaImage                    `json:"images"`
	LanguageCode        *string                                           `json:"languageCode"`
	LocalInventories    []GoogleCloudRetailV2betaLocalInventory           `json:"localInventories"`
	Materials           []string                                          `json:"materials"`
	Name                *string                                           `json:"name"`
	Patterns            []string                                          `json:"patterns"`
	PriceInfo           *GoogleCloudRetailV2betaPriceInfo                 `json:"priceInfo"`
	PrimaryProductID    *string                                           `json:"primaryProductId"`
	Promotions          []GoogleCloudRetailV2betaPromotion                `json:"promotions"`
	PublishTime         *string                                           `json:"publishTime"`
	Rating              *GoogleCloudRetailV2betaRating                    `json:"rating"`
	RetrievableFields   *string                                           `json:"retrievableFields"`
	Sizes               []string                                          `json:"sizes"`
	Tags                []string                                          `json:"tags"`
	Title               *string                                           `json:"title"`
	TTL                 *string                                           `json:"ttl"`
	Type                *GoogleCloudRetailV2betaProductTypeEnum           `json:"type"`
	URI                 *string                                           `json:"uri"`
	Variants            []GoogleCloudRetailV2betaProduct                  `json:"variants"`
}
