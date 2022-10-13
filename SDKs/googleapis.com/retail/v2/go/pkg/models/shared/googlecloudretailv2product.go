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
	Attributes          map[string]GoogleCloudRetailV2CustomAttribute `json:"attributes"`
	Audience            *GoogleCloudRetailV2Audience                  `json:"audience"`
	Availability        *GoogleCloudRetailV2ProductAvailabilityEnum   `json:"availability"`
	AvailableQuantity   *int32                                        `json:"availableQuantity"`
	AvailableTime       *string                                       `json:"availableTime"`
	Brands              []string                                      `json:"brands"`
	Categories          []string                                      `json:"categories"`
	CollectionMemberIds []string                                      `json:"collectionMemberIds"`
	ColorInfo           *GoogleCloudRetailV2ColorInfo                 `json:"colorInfo"`
	Conditions          []string                                      `json:"conditions"`
	Description         *string                                       `json:"description"`
	ExpireTime          *string                                       `json:"expireTime"`
	FulfillmentInfo     []GoogleCloudRetailV2FulfillmentInfo          `json:"fulfillmentInfo"`
	Gtin                *string                                       `json:"gtin"`
	ID                  *string                                       `json:"id"`
	Images              []GoogleCloudRetailV2Image                    `json:"images"`
	LanguageCode        *string                                       `json:"languageCode"`
	LocalInventories    []GoogleCloudRetailV2LocalInventory           `json:"localInventories"`
	Materials           []string                                      `json:"materials"`
	Name                *string                                       `json:"name"`
	Patterns            []string                                      `json:"patterns"`
	PriceInfo           *GoogleCloudRetailV2PriceInfo                 `json:"priceInfo"`
	PrimaryProductID    *string                                       `json:"primaryProductId"`
	Promotions          []GoogleCloudRetailV2Promotion                `json:"promotions"`
	PublishTime         *string                                       `json:"publishTime"`
	Rating              *GoogleCloudRetailV2Rating                    `json:"rating"`
	RetrievableFields   *string                                       `json:"retrievableFields"`
	Sizes               []string                                      `json:"sizes"`
	Tags                []string                                      `json:"tags"`
	Title               *string                                       `json:"title"`
	TTL                 *string                                       `json:"ttl"`
	Type                *GoogleCloudRetailV2ProductTypeEnum           `json:"type"`
	URI                 *string                                       `json:"uri"`
	Variants            []GoogleCloudRetailV2Product                  `json:"variants"`
}
