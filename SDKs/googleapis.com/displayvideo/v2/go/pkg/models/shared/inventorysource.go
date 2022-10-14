package shared

type InventorySourceCommitmentEnum string

const (
	InventorySourceCommitmentEnumInventorySourceCommitmentUnspecified   InventorySourceCommitmentEnum = "INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED"
	InventorySourceCommitmentEnumInventorySourceCommitmentGuaranteed    InventorySourceCommitmentEnum = "INVENTORY_SOURCE_COMMITMENT_GUARANTEED"
	InventorySourceCommitmentEnumInventorySourceCommitmentNonGuaranteed InventorySourceCommitmentEnum = "INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED"
)

type InventorySourceDeliveryMethodEnum string

const (
	InventorySourceDeliveryMethodEnumInventorySourceDeliveryMethodUnspecified  InventorySourceDeliveryMethodEnum = "INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED"
	InventorySourceDeliveryMethodEnumInventorySourceDeliveryMethodProgrammatic InventorySourceDeliveryMethodEnum = "INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC"
	InventorySourceDeliveryMethodEnumInventorySourceDeliveryMethodTag          InventorySourceDeliveryMethodEnum = "INVENTORY_SOURCE_DELIVERY_METHOD_TAG"
)

type InventorySourceExchangeEnum string

const (
	InventorySourceExchangeEnumExchangeUnspecified       InventorySourceExchangeEnum = "EXCHANGE_UNSPECIFIED"
	InventorySourceExchangeEnumExchangeGoogleAdManager   InventorySourceExchangeEnum = "EXCHANGE_GOOGLE_AD_MANAGER"
	InventorySourceExchangeEnumExchangeAppnexus          InventorySourceExchangeEnum = "EXCHANGE_APPNEXUS"
	InventorySourceExchangeEnumExchangeBrightroll        InventorySourceExchangeEnum = "EXCHANGE_BRIGHTROLL"
	InventorySourceExchangeEnumExchangeAdform            InventorySourceExchangeEnum = "EXCHANGE_ADFORM"
	InventorySourceExchangeEnumExchangeAdmeta            InventorySourceExchangeEnum = "EXCHANGE_ADMETA"
	InventorySourceExchangeEnumExchangeAdmixer           InventorySourceExchangeEnum = "EXCHANGE_ADMIXER"
	InventorySourceExchangeEnumExchangeAdsmogo           InventorySourceExchangeEnum = "EXCHANGE_ADSMOGO"
	InventorySourceExchangeEnumExchangeAdswizz           InventorySourceExchangeEnum = "EXCHANGE_ADSWIZZ"
	InventorySourceExchangeEnumExchangeBidswitch         InventorySourceExchangeEnum = "EXCHANGE_BIDSWITCH"
	InventorySourceExchangeEnumExchangeBrightrollDisplay InventorySourceExchangeEnum = "EXCHANGE_BRIGHTROLL_DISPLAY"
	InventorySourceExchangeEnumExchangeCadreon           InventorySourceExchangeEnum = "EXCHANGE_CADREON"
	InventorySourceExchangeEnumExchangeDailymotion       InventorySourceExchangeEnum = "EXCHANGE_DAILYMOTION"
	InventorySourceExchangeEnumExchangeFive              InventorySourceExchangeEnum = "EXCHANGE_FIVE"
	InventorySourceExchangeEnumExchangeFluct             InventorySourceExchangeEnum = "EXCHANGE_FLUCT"
	InventorySourceExchangeEnumExchangeFreewheel         InventorySourceExchangeEnum = "EXCHANGE_FREEWHEEL"
	InventorySourceExchangeEnumExchangeGeniee            InventorySourceExchangeEnum = "EXCHANGE_GENIEE"
	InventorySourceExchangeEnumExchangeGumgum            InventorySourceExchangeEnum = "EXCHANGE_GUMGUM"
	InventorySourceExchangeEnumExchangeImobile           InventorySourceExchangeEnum = "EXCHANGE_IMOBILE"
	InventorySourceExchangeEnumExchangeIbillboard        InventorySourceExchangeEnum = "EXCHANGE_IBILLBOARD"
	InventorySourceExchangeEnumExchangeImproveDigital    InventorySourceExchangeEnum = "EXCHANGE_IMPROVE_DIGITAL"
	InventorySourceExchangeEnumExchangeIndex             InventorySourceExchangeEnum = "EXCHANGE_INDEX"
	InventorySourceExchangeEnumExchangeKargo             InventorySourceExchangeEnum = "EXCHANGE_KARGO"
	InventorySourceExchangeEnumExchangeMicroad           InventorySourceExchangeEnum = "EXCHANGE_MICROAD"
	InventorySourceExchangeEnumExchangeMopub             InventorySourceExchangeEnum = "EXCHANGE_MOPUB"
	InventorySourceExchangeEnumExchangeNend              InventorySourceExchangeEnum = "EXCHANGE_NEND"
	InventorySourceExchangeEnumExchangeOneByAolDisplay   InventorySourceExchangeEnum = "EXCHANGE_ONE_BY_AOL_DISPLAY"
	InventorySourceExchangeEnumExchangeOneByAolMobile    InventorySourceExchangeEnum = "EXCHANGE_ONE_BY_AOL_MOBILE"
	InventorySourceExchangeEnumExchangeOneByAolVideo     InventorySourceExchangeEnum = "EXCHANGE_ONE_BY_AOL_VIDEO"
	InventorySourceExchangeEnumExchangeOoyala            InventorySourceExchangeEnum = "EXCHANGE_OOYALA"
	InventorySourceExchangeEnumExchangeOpenx             InventorySourceExchangeEnum = "EXCHANGE_OPENX"
	InventorySourceExchangeEnumExchangePermodo           InventorySourceExchangeEnum = "EXCHANGE_PERMODO"
	InventorySourceExchangeEnumExchangePlatformone       InventorySourceExchangeEnum = "EXCHANGE_PLATFORMONE"
	InventorySourceExchangeEnumExchangePlatformid        InventorySourceExchangeEnum = "EXCHANGE_PLATFORMID"
	InventorySourceExchangeEnumExchangePubmatic          InventorySourceExchangeEnum = "EXCHANGE_PUBMATIC"
	InventorySourceExchangeEnumExchangePulsepoint        InventorySourceExchangeEnum = "EXCHANGE_PULSEPOINT"
	InventorySourceExchangeEnumExchangeRevenuemax        InventorySourceExchangeEnum = "EXCHANGE_REVENUEMAX"
	InventorySourceExchangeEnumExchangeRubicon           InventorySourceExchangeEnum = "EXCHANGE_RUBICON"
	InventorySourceExchangeEnumExchangeSmartclip         InventorySourceExchangeEnum = "EXCHANGE_SMARTCLIP"
	InventorySourceExchangeEnumExchangeSmartrtb          InventorySourceExchangeEnum = "EXCHANGE_SMARTRTB"
	InventorySourceExchangeEnumExchangeSmartstreamtv     InventorySourceExchangeEnum = "EXCHANGE_SMARTSTREAMTV"
	InventorySourceExchangeEnumExchangeSovrn             InventorySourceExchangeEnum = "EXCHANGE_SOVRN"
	InventorySourceExchangeEnumExchangeSpotxchange       InventorySourceExchangeEnum = "EXCHANGE_SPOTXCHANGE"
	InventorySourceExchangeEnumExchangeStroer            InventorySourceExchangeEnum = "EXCHANGE_STROER"
	InventorySourceExchangeEnumExchangeTeadstv           InventorySourceExchangeEnum = "EXCHANGE_TEADSTV"
	InventorySourceExchangeEnumExchangeTelaria           InventorySourceExchangeEnum = "EXCHANGE_TELARIA"
	InventorySourceExchangeEnumExchangeTvn               InventorySourceExchangeEnum = "EXCHANGE_TVN"
	InventorySourceExchangeEnumExchangeUnited            InventorySourceExchangeEnum = "EXCHANGE_UNITED"
	InventorySourceExchangeEnumExchangeYieldlab          InventorySourceExchangeEnum = "EXCHANGE_YIELDLAB"
	InventorySourceExchangeEnumExchangeYieldmo           InventorySourceExchangeEnum = "EXCHANGE_YIELDMO"
	InventorySourceExchangeEnumExchangeUnrulyx           InventorySourceExchangeEnum = "EXCHANGE_UNRULYX"
	InventorySourceExchangeEnumExchangeOpen8             InventorySourceExchangeEnum = "EXCHANGE_OPEN8"
	InventorySourceExchangeEnumExchangeTriton            InventorySourceExchangeEnum = "EXCHANGE_TRITON"
	InventorySourceExchangeEnumExchangeTriplelift        InventorySourceExchangeEnum = "EXCHANGE_TRIPLELIFT"
	InventorySourceExchangeEnumExchangeTaboola           InventorySourceExchangeEnum = "EXCHANGE_TABOOLA"
	InventorySourceExchangeEnumExchangeInmobi            InventorySourceExchangeEnum = "EXCHANGE_INMOBI"
	InventorySourceExchangeEnumExchangeSmaato            InventorySourceExchangeEnum = "EXCHANGE_SMAATO"
	InventorySourceExchangeEnumExchangeAja               InventorySourceExchangeEnum = "EXCHANGE_AJA"
	InventorySourceExchangeEnumExchangeSupership         InventorySourceExchangeEnum = "EXCHANGE_SUPERSHIP"
	InventorySourceExchangeEnumExchangeNexstarDigital    InventorySourceExchangeEnum = "EXCHANGE_NEXSTAR_DIGITAL"
	InventorySourceExchangeEnumExchangeWaze              InventorySourceExchangeEnum = "EXCHANGE_WAZE"
	InventorySourceExchangeEnumExchangeSoundcast         InventorySourceExchangeEnum = "EXCHANGE_SOUNDCAST"
	InventorySourceExchangeEnumExchangeSharethrough      InventorySourceExchangeEnum = "EXCHANGE_SHARETHROUGH"
	InventorySourceExchangeEnumExchangeFyber             InventorySourceExchangeEnum = "EXCHANGE_FYBER"
	InventorySourceExchangeEnumExchangeRedForPublishers  InventorySourceExchangeEnum = "EXCHANGE_RED_FOR_PUBLISHERS"
	InventorySourceExchangeEnumExchangeMedianet          InventorySourceExchangeEnum = "EXCHANGE_MEDIANET"
	InventorySourceExchangeEnumExchangeTapjoy            InventorySourceExchangeEnum = "EXCHANGE_TAPJOY"
	InventorySourceExchangeEnumExchangeVistar            InventorySourceExchangeEnum = "EXCHANGE_VISTAR"
	InventorySourceExchangeEnumExchangeDax               InventorySourceExchangeEnum = "EXCHANGE_DAX"
)

type InventorySourceInventorySourceProductTypeEnum string

const (
	InventorySourceInventorySourceProductTypeEnumInventorySourceProductTypeUnspecified InventorySourceInventorySourceProductTypeEnum = "INVENTORY_SOURCE_PRODUCT_TYPE_UNSPECIFIED"
	InventorySourceInventorySourceProductTypeEnumPreferredDeal                         InventorySourceInventorySourceProductTypeEnum = "PREFERRED_DEAL"
	InventorySourceInventorySourceProductTypeEnumPrivateAuction                        InventorySourceInventorySourceProductTypeEnum = "PRIVATE_AUCTION"
	InventorySourceInventorySourceProductTypeEnumProgrammaticGuaranteed                InventorySourceInventorySourceProductTypeEnum = "PROGRAMMATIC_GUARANTEED"
	InventorySourceInventorySourceProductTypeEnumTagGuaranteed                         InventorySourceInventorySourceProductTypeEnum = "TAG_GUARANTEED"
	InventorySourceInventorySourceProductTypeEnumYoutubeReserve                        InventorySourceInventorySourceProductTypeEnum = "YOUTUBE_RESERVE"
	InventorySourceInventorySourceProductTypeEnumInstantReserve                        InventorySourceInventorySourceProductTypeEnum = "INSTANT_RESERVE"
	InventorySourceInventorySourceProductTypeEnumGuaranteedPackage                     InventorySourceInventorySourceProductTypeEnum = "GUARANTEED_PACKAGE"
	InventorySourceInventorySourceProductTypeEnumProgrammaticTv                        InventorySourceInventorySourceProductTypeEnum = "PROGRAMMATIC_TV"
	InventorySourceInventorySourceProductTypeEnumAuctionPackage                        InventorySourceInventorySourceProductTypeEnum = "AUCTION_PACKAGE"
)

type InventorySourceInventorySourceTypeEnum string

const (
	InventorySourceInventorySourceTypeEnumInventorySourceTypeUnspecified    InventorySourceInventorySourceTypeEnum = "INVENTORY_SOURCE_TYPE_UNSPECIFIED"
	InventorySourceInventorySourceTypeEnumInventorySourceTypePrivate        InventorySourceInventorySourceTypeEnum = "INVENTORY_SOURCE_TYPE_PRIVATE"
	InventorySourceInventorySourceTypeEnumInventorySourceTypeAuctionPackage InventorySourceInventorySourceTypeEnum = "INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE"
)

type InventorySource struct {
	Commitment                 *InventorySourceCommitmentEnum                 `json:"commitment,omitempty"`
	CreativeConfigs            []CreativeConfig                               `json:"creativeConfigs,omitempty"`
	DealID                     *string                                        `json:"dealId,omitempty"`
	DeliveryMethod             *InventorySourceDeliveryMethodEnum             `json:"deliveryMethod,omitempty"`
	DisplayName                *string                                        `json:"displayName,omitempty"`
	Exchange                   *InventorySourceExchangeEnum                   `json:"exchange,omitempty"`
	GuaranteedOrderID          *string                                        `json:"guaranteedOrderId,omitempty"`
	InventorySourceID          *string                                        `json:"inventorySourceId,omitempty"`
	InventorySourceProductType *InventorySourceInventorySourceProductTypeEnum `json:"inventorySourceProductType,omitempty"`
	InventorySourceType        *InventorySourceInventorySourceTypeEnum        `json:"inventorySourceType,omitempty"`
	Name                       *string                                        `json:"name,omitempty"`
	PublisherName              *string                                        `json:"publisherName,omitempty"`
	RateDetails                *RateDetails                                   `json:"rateDetails,omitempty"`
	ReadAdvertiserIds          []string                                       `json:"readAdvertiserIds,omitempty"`
	ReadPartnerIds             []string                                       `json:"readPartnerIds,omitempty"`
	ReadWriteAccessors         *InventorySourceAccessors                      `json:"readWriteAccessors,omitempty"`
	Status                     *InventorySourceStatus                         `json:"status,omitempty"`
	SubSitePropertyID          *string                                        `json:"subSitePropertyId,omitempty"`
	TimeRange                  *TimeRange                                     `json:"timeRange,omitempty"`
	UpdateTime                 *string                                        `json:"updateTime,omitempty"`
}
