package shared

type FloodlightActivityCacheBustingTypeEnum string

const (
	FloodlightActivityCacheBustingTypeEnumJavascript       FloodlightActivityCacheBustingTypeEnum = "JAVASCRIPT"
	FloodlightActivityCacheBustingTypeEnumActiveServerPage FloodlightActivityCacheBustingTypeEnum = "ACTIVE_SERVER_PAGE"
	FloodlightActivityCacheBustingTypeEnumJsp              FloodlightActivityCacheBustingTypeEnum = "JSP"
	FloodlightActivityCacheBustingTypeEnumPhp              FloodlightActivityCacheBustingTypeEnum = "PHP"
	FloodlightActivityCacheBustingTypeEnumColdFusion       FloodlightActivityCacheBustingTypeEnum = "COLD_FUSION"
)

type FloodlightActivityCountingMethodEnum string

const (
	FloodlightActivityCountingMethodEnumStandardCounting     FloodlightActivityCountingMethodEnum = "STANDARD_COUNTING"
	FloodlightActivityCountingMethodEnumUniqueCounting       FloodlightActivityCountingMethodEnum = "UNIQUE_COUNTING"
	FloodlightActivityCountingMethodEnumSessionCounting      FloodlightActivityCountingMethodEnum = "SESSION_COUNTING"
	FloodlightActivityCountingMethodEnumTransactionsCounting FloodlightActivityCountingMethodEnum = "TRANSACTIONS_COUNTING"
	FloodlightActivityCountingMethodEnumItemsSoldCounting    FloodlightActivityCountingMethodEnum = "ITEMS_SOLD_COUNTING"
)

type FloodlightActivityFloodlightActivityGroupTypeEnum string

const (
	FloodlightActivityFloodlightActivityGroupTypeEnumCounter FloodlightActivityFloodlightActivityGroupTypeEnum = "COUNTER"
	FloodlightActivityFloodlightActivityGroupTypeEnumSale    FloodlightActivityFloodlightActivityGroupTypeEnum = "SALE"
)

type FloodlightActivityFloodlightTagTypeEnum string

const (
	FloodlightActivityFloodlightTagTypeEnumIframe        FloodlightActivityFloodlightTagTypeEnum = "IFRAME"
	FloodlightActivityFloodlightTagTypeEnumImage         FloodlightActivityFloodlightTagTypeEnum = "IMAGE"
	FloodlightActivityFloodlightTagTypeEnumGlobalSiteTag FloodlightActivityFloodlightTagTypeEnum = "GLOBAL_SITE_TAG"
)

type FloodlightActivityStatusEnum string

const (
	FloodlightActivityStatusEnumActive              FloodlightActivityStatusEnum = "ACTIVE"
	FloodlightActivityStatusEnumArchivedAndDisabled FloodlightActivityStatusEnum = "ARCHIVED_AND_DISABLED"
	FloodlightActivityStatusEnumArchived            FloodlightActivityStatusEnum = "ARCHIVED"
	FloodlightActivityStatusEnumDisabledPolicy      FloodlightActivityStatusEnum = "DISABLED_POLICY"
)

type FloodlightActivityTagFormatEnum string

const (
	FloodlightActivityTagFormatEnumHTML  FloodlightActivityTagFormatEnum = "HTML"
	FloodlightActivityTagFormatEnumXhtml FloodlightActivityTagFormatEnum = "XHTML"
)

type FloodlightActivityUserDefinedVariableTypesEnum string

const (
	FloodlightActivityUserDefinedVariableTypesEnumU1   FloodlightActivityUserDefinedVariableTypesEnum = "U1"
	FloodlightActivityUserDefinedVariableTypesEnumU2   FloodlightActivityUserDefinedVariableTypesEnum = "U2"
	FloodlightActivityUserDefinedVariableTypesEnumU3   FloodlightActivityUserDefinedVariableTypesEnum = "U3"
	FloodlightActivityUserDefinedVariableTypesEnumU4   FloodlightActivityUserDefinedVariableTypesEnum = "U4"
	FloodlightActivityUserDefinedVariableTypesEnumU5   FloodlightActivityUserDefinedVariableTypesEnum = "U5"
	FloodlightActivityUserDefinedVariableTypesEnumU6   FloodlightActivityUserDefinedVariableTypesEnum = "U6"
	FloodlightActivityUserDefinedVariableTypesEnumU7   FloodlightActivityUserDefinedVariableTypesEnum = "U7"
	FloodlightActivityUserDefinedVariableTypesEnumU8   FloodlightActivityUserDefinedVariableTypesEnum = "U8"
	FloodlightActivityUserDefinedVariableTypesEnumU9   FloodlightActivityUserDefinedVariableTypesEnum = "U9"
	FloodlightActivityUserDefinedVariableTypesEnumU10  FloodlightActivityUserDefinedVariableTypesEnum = "U10"
	FloodlightActivityUserDefinedVariableTypesEnumU11  FloodlightActivityUserDefinedVariableTypesEnum = "U11"
	FloodlightActivityUserDefinedVariableTypesEnumU12  FloodlightActivityUserDefinedVariableTypesEnum = "U12"
	FloodlightActivityUserDefinedVariableTypesEnumU13  FloodlightActivityUserDefinedVariableTypesEnum = "U13"
	FloodlightActivityUserDefinedVariableTypesEnumU14  FloodlightActivityUserDefinedVariableTypesEnum = "U14"
	FloodlightActivityUserDefinedVariableTypesEnumU15  FloodlightActivityUserDefinedVariableTypesEnum = "U15"
	FloodlightActivityUserDefinedVariableTypesEnumU16  FloodlightActivityUserDefinedVariableTypesEnum = "U16"
	FloodlightActivityUserDefinedVariableTypesEnumU17  FloodlightActivityUserDefinedVariableTypesEnum = "U17"
	FloodlightActivityUserDefinedVariableTypesEnumU18  FloodlightActivityUserDefinedVariableTypesEnum = "U18"
	FloodlightActivityUserDefinedVariableTypesEnumU19  FloodlightActivityUserDefinedVariableTypesEnum = "U19"
	FloodlightActivityUserDefinedVariableTypesEnumU20  FloodlightActivityUserDefinedVariableTypesEnum = "U20"
	FloodlightActivityUserDefinedVariableTypesEnumU21  FloodlightActivityUserDefinedVariableTypesEnum = "U21"
	FloodlightActivityUserDefinedVariableTypesEnumU22  FloodlightActivityUserDefinedVariableTypesEnum = "U22"
	FloodlightActivityUserDefinedVariableTypesEnumU23  FloodlightActivityUserDefinedVariableTypesEnum = "U23"
	FloodlightActivityUserDefinedVariableTypesEnumU24  FloodlightActivityUserDefinedVariableTypesEnum = "U24"
	FloodlightActivityUserDefinedVariableTypesEnumU25  FloodlightActivityUserDefinedVariableTypesEnum = "U25"
	FloodlightActivityUserDefinedVariableTypesEnumU26  FloodlightActivityUserDefinedVariableTypesEnum = "U26"
	FloodlightActivityUserDefinedVariableTypesEnumU27  FloodlightActivityUserDefinedVariableTypesEnum = "U27"
	FloodlightActivityUserDefinedVariableTypesEnumU28  FloodlightActivityUserDefinedVariableTypesEnum = "U28"
	FloodlightActivityUserDefinedVariableTypesEnumU29  FloodlightActivityUserDefinedVariableTypesEnum = "U29"
	FloodlightActivityUserDefinedVariableTypesEnumU30  FloodlightActivityUserDefinedVariableTypesEnum = "U30"
	FloodlightActivityUserDefinedVariableTypesEnumU31  FloodlightActivityUserDefinedVariableTypesEnum = "U31"
	FloodlightActivityUserDefinedVariableTypesEnumU32  FloodlightActivityUserDefinedVariableTypesEnum = "U32"
	FloodlightActivityUserDefinedVariableTypesEnumU33  FloodlightActivityUserDefinedVariableTypesEnum = "U33"
	FloodlightActivityUserDefinedVariableTypesEnumU34  FloodlightActivityUserDefinedVariableTypesEnum = "U34"
	FloodlightActivityUserDefinedVariableTypesEnumU35  FloodlightActivityUserDefinedVariableTypesEnum = "U35"
	FloodlightActivityUserDefinedVariableTypesEnumU36  FloodlightActivityUserDefinedVariableTypesEnum = "U36"
	FloodlightActivityUserDefinedVariableTypesEnumU37  FloodlightActivityUserDefinedVariableTypesEnum = "U37"
	FloodlightActivityUserDefinedVariableTypesEnumU38  FloodlightActivityUserDefinedVariableTypesEnum = "U38"
	FloodlightActivityUserDefinedVariableTypesEnumU39  FloodlightActivityUserDefinedVariableTypesEnum = "U39"
	FloodlightActivityUserDefinedVariableTypesEnumU40  FloodlightActivityUserDefinedVariableTypesEnum = "U40"
	FloodlightActivityUserDefinedVariableTypesEnumU41  FloodlightActivityUserDefinedVariableTypesEnum = "U41"
	FloodlightActivityUserDefinedVariableTypesEnumU42  FloodlightActivityUserDefinedVariableTypesEnum = "U42"
	FloodlightActivityUserDefinedVariableTypesEnumU43  FloodlightActivityUserDefinedVariableTypesEnum = "U43"
	FloodlightActivityUserDefinedVariableTypesEnumU44  FloodlightActivityUserDefinedVariableTypesEnum = "U44"
	FloodlightActivityUserDefinedVariableTypesEnumU45  FloodlightActivityUserDefinedVariableTypesEnum = "U45"
	FloodlightActivityUserDefinedVariableTypesEnumU46  FloodlightActivityUserDefinedVariableTypesEnum = "U46"
	FloodlightActivityUserDefinedVariableTypesEnumU47  FloodlightActivityUserDefinedVariableTypesEnum = "U47"
	FloodlightActivityUserDefinedVariableTypesEnumU48  FloodlightActivityUserDefinedVariableTypesEnum = "U48"
	FloodlightActivityUserDefinedVariableTypesEnumU49  FloodlightActivityUserDefinedVariableTypesEnum = "U49"
	FloodlightActivityUserDefinedVariableTypesEnumU50  FloodlightActivityUserDefinedVariableTypesEnum = "U50"
	FloodlightActivityUserDefinedVariableTypesEnumU51  FloodlightActivityUserDefinedVariableTypesEnum = "U51"
	FloodlightActivityUserDefinedVariableTypesEnumU52  FloodlightActivityUserDefinedVariableTypesEnum = "U52"
	FloodlightActivityUserDefinedVariableTypesEnumU53  FloodlightActivityUserDefinedVariableTypesEnum = "U53"
	FloodlightActivityUserDefinedVariableTypesEnumU54  FloodlightActivityUserDefinedVariableTypesEnum = "U54"
	FloodlightActivityUserDefinedVariableTypesEnumU55  FloodlightActivityUserDefinedVariableTypesEnum = "U55"
	FloodlightActivityUserDefinedVariableTypesEnumU56  FloodlightActivityUserDefinedVariableTypesEnum = "U56"
	FloodlightActivityUserDefinedVariableTypesEnumU57  FloodlightActivityUserDefinedVariableTypesEnum = "U57"
	FloodlightActivityUserDefinedVariableTypesEnumU58  FloodlightActivityUserDefinedVariableTypesEnum = "U58"
	FloodlightActivityUserDefinedVariableTypesEnumU59  FloodlightActivityUserDefinedVariableTypesEnum = "U59"
	FloodlightActivityUserDefinedVariableTypesEnumU60  FloodlightActivityUserDefinedVariableTypesEnum = "U60"
	FloodlightActivityUserDefinedVariableTypesEnumU61  FloodlightActivityUserDefinedVariableTypesEnum = "U61"
	FloodlightActivityUserDefinedVariableTypesEnumU62  FloodlightActivityUserDefinedVariableTypesEnum = "U62"
	FloodlightActivityUserDefinedVariableTypesEnumU63  FloodlightActivityUserDefinedVariableTypesEnum = "U63"
	FloodlightActivityUserDefinedVariableTypesEnumU64  FloodlightActivityUserDefinedVariableTypesEnum = "U64"
	FloodlightActivityUserDefinedVariableTypesEnumU65  FloodlightActivityUserDefinedVariableTypesEnum = "U65"
	FloodlightActivityUserDefinedVariableTypesEnumU66  FloodlightActivityUserDefinedVariableTypesEnum = "U66"
	FloodlightActivityUserDefinedVariableTypesEnumU67  FloodlightActivityUserDefinedVariableTypesEnum = "U67"
	FloodlightActivityUserDefinedVariableTypesEnumU68  FloodlightActivityUserDefinedVariableTypesEnum = "U68"
	FloodlightActivityUserDefinedVariableTypesEnumU69  FloodlightActivityUserDefinedVariableTypesEnum = "U69"
	FloodlightActivityUserDefinedVariableTypesEnumU70  FloodlightActivityUserDefinedVariableTypesEnum = "U70"
	FloodlightActivityUserDefinedVariableTypesEnumU71  FloodlightActivityUserDefinedVariableTypesEnum = "U71"
	FloodlightActivityUserDefinedVariableTypesEnumU72  FloodlightActivityUserDefinedVariableTypesEnum = "U72"
	FloodlightActivityUserDefinedVariableTypesEnumU73  FloodlightActivityUserDefinedVariableTypesEnum = "U73"
	FloodlightActivityUserDefinedVariableTypesEnumU74  FloodlightActivityUserDefinedVariableTypesEnum = "U74"
	FloodlightActivityUserDefinedVariableTypesEnumU75  FloodlightActivityUserDefinedVariableTypesEnum = "U75"
	FloodlightActivityUserDefinedVariableTypesEnumU76  FloodlightActivityUserDefinedVariableTypesEnum = "U76"
	FloodlightActivityUserDefinedVariableTypesEnumU77  FloodlightActivityUserDefinedVariableTypesEnum = "U77"
	FloodlightActivityUserDefinedVariableTypesEnumU78  FloodlightActivityUserDefinedVariableTypesEnum = "U78"
	FloodlightActivityUserDefinedVariableTypesEnumU79  FloodlightActivityUserDefinedVariableTypesEnum = "U79"
	FloodlightActivityUserDefinedVariableTypesEnumU80  FloodlightActivityUserDefinedVariableTypesEnum = "U80"
	FloodlightActivityUserDefinedVariableTypesEnumU81  FloodlightActivityUserDefinedVariableTypesEnum = "U81"
	FloodlightActivityUserDefinedVariableTypesEnumU82  FloodlightActivityUserDefinedVariableTypesEnum = "U82"
	FloodlightActivityUserDefinedVariableTypesEnumU83  FloodlightActivityUserDefinedVariableTypesEnum = "U83"
	FloodlightActivityUserDefinedVariableTypesEnumU84  FloodlightActivityUserDefinedVariableTypesEnum = "U84"
	FloodlightActivityUserDefinedVariableTypesEnumU85  FloodlightActivityUserDefinedVariableTypesEnum = "U85"
	FloodlightActivityUserDefinedVariableTypesEnumU86  FloodlightActivityUserDefinedVariableTypesEnum = "U86"
	FloodlightActivityUserDefinedVariableTypesEnumU87  FloodlightActivityUserDefinedVariableTypesEnum = "U87"
	FloodlightActivityUserDefinedVariableTypesEnumU88  FloodlightActivityUserDefinedVariableTypesEnum = "U88"
	FloodlightActivityUserDefinedVariableTypesEnumU89  FloodlightActivityUserDefinedVariableTypesEnum = "U89"
	FloodlightActivityUserDefinedVariableTypesEnumU90  FloodlightActivityUserDefinedVariableTypesEnum = "U90"
	FloodlightActivityUserDefinedVariableTypesEnumU91  FloodlightActivityUserDefinedVariableTypesEnum = "U91"
	FloodlightActivityUserDefinedVariableTypesEnumU92  FloodlightActivityUserDefinedVariableTypesEnum = "U92"
	FloodlightActivityUserDefinedVariableTypesEnumU93  FloodlightActivityUserDefinedVariableTypesEnum = "U93"
	FloodlightActivityUserDefinedVariableTypesEnumU94  FloodlightActivityUserDefinedVariableTypesEnum = "U94"
	FloodlightActivityUserDefinedVariableTypesEnumU95  FloodlightActivityUserDefinedVariableTypesEnum = "U95"
	FloodlightActivityUserDefinedVariableTypesEnumU96  FloodlightActivityUserDefinedVariableTypesEnum = "U96"
	FloodlightActivityUserDefinedVariableTypesEnumU97  FloodlightActivityUserDefinedVariableTypesEnum = "U97"
	FloodlightActivityUserDefinedVariableTypesEnumU98  FloodlightActivityUserDefinedVariableTypesEnum = "U98"
	FloodlightActivityUserDefinedVariableTypesEnumU99  FloodlightActivityUserDefinedVariableTypesEnum = "U99"
	FloodlightActivityUserDefinedVariableTypesEnumU100 FloodlightActivityUserDefinedVariableTypesEnum = "U100"
)

type FloodlightActivity struct {
	AccountID                               *string                                            `json:"accountId"`
	AdvertiserID                            *string                                            `json:"advertiserId"`
	AdvertiserIDDimensionValue              *DimensionValue                                    `json:"advertiserIdDimensionValue"`
	AttributionEnabled                      *bool                                              `json:"attributionEnabled"`
	CacheBustingType                        *FloodlightActivityCacheBustingTypeEnum            `json:"cacheBustingType"`
	CountingMethod                          *FloodlightActivityCountingMethodEnum              `json:"countingMethod"`
	DefaultTags                             []FloodlightActivityDynamicTag                     `json:"defaultTags"`
	ExpectedURL                             *string                                            `json:"expectedUrl"`
	FloodlightActivityGroupID               *string                                            `json:"floodlightActivityGroupId"`
	FloodlightActivityGroupName             *string                                            `json:"floodlightActivityGroupName"`
	FloodlightActivityGroupTagString        *string                                            `json:"floodlightActivityGroupTagString"`
	FloodlightActivityGroupType             *FloodlightActivityFloodlightActivityGroupTypeEnum `json:"floodlightActivityGroupType"`
	FloodlightConfigurationID               *string                                            `json:"floodlightConfigurationId"`
	FloodlightConfigurationIDDimensionValue *DimensionValue                                    `json:"floodlightConfigurationIdDimensionValue"`
	FloodlightTagType                       *FloodlightActivityFloodlightTagTypeEnum           `json:"floodlightTagType"`
	ID                                      *string                                            `json:"id"`
	IDDimensionValue                        *DimensionValue                                    `json:"idDimensionValue"`
	Kind                                    *string                                            `json:"kind"`
	Name                                    *string                                            `json:"name"`
	Notes                                   *string                                            `json:"notes"`
	PublisherTags                           []FloodlightActivityPublisherDynamicTag            `json:"publisherTags"`
	Secure                                  *bool                                              `json:"secure"`
	SslCompliant                            *bool                                              `json:"sslCompliant"`
	SslRequired                             *bool                                              `json:"sslRequired"`
	Status                                  *FloodlightActivityStatusEnum                      `json:"status"`
	SubaccountID                            *string                                            `json:"subaccountId"`
	TagFormat                               *FloodlightActivityTagFormatEnum                   `json:"tagFormat"`
	TagString                               *string                                            `json:"tagString"`
	UserDefinedVariableTypes                []FloodlightActivityUserDefinedVariableTypesEnum   `json:"userDefinedVariableTypes"`
}
