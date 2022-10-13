package shared

type CreativeCreativeAttributesEnum string

const (
	CreativeCreativeAttributesEnumCreativeAttributeUnspecified    CreativeCreativeAttributesEnum = "CREATIVE_ATTRIBUTE_UNSPECIFIED"
	CreativeCreativeAttributesEnumCreativeAttributeVast           CreativeCreativeAttributesEnum = "CREATIVE_ATTRIBUTE_VAST"
	CreativeCreativeAttributesEnumCreativeAttributeVpaidLinear    CreativeCreativeAttributesEnum = "CREATIVE_ATTRIBUTE_VPAID_LINEAR"
	CreativeCreativeAttributesEnumCreativeAttributeVpaidNonLinear CreativeCreativeAttributesEnum = "CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR"
)

type CreativeCreativeTypeEnum string

const (
	CreativeCreativeTypeEnumCreativeTypeUnspecified                     CreativeCreativeTypeEnum = "CREATIVE_TYPE_UNSPECIFIED"
	CreativeCreativeTypeEnumCreativeTypeStandard                        CreativeCreativeTypeEnum = "CREATIVE_TYPE_STANDARD"
	CreativeCreativeTypeEnumCreativeTypeExpandable                      CreativeCreativeTypeEnum = "CREATIVE_TYPE_EXPANDABLE"
	CreativeCreativeTypeEnumCreativeTypeVideo                           CreativeCreativeTypeEnum = "CREATIVE_TYPE_VIDEO"
	CreativeCreativeTypeEnumCreativeTypeNative                          CreativeCreativeTypeEnum = "CREATIVE_TYPE_NATIVE"
	CreativeCreativeTypeEnumCreativeTypeTemplatedAppInstall             CreativeCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL"
	CreativeCreativeTypeEnumCreativeTypeNativeSiteSquare                CreativeCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_SITE_SQUARE"
	CreativeCreativeTypeEnumCreativeTypeTemplatedAppInstallInterstitial CreativeCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL"
	CreativeCreativeTypeEnumCreativeTypeLightbox                        CreativeCreativeTypeEnum = "CREATIVE_TYPE_LIGHTBOX"
	CreativeCreativeTypeEnumCreativeTypeNativeAppInstall                CreativeCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_APP_INSTALL"
	CreativeCreativeTypeEnumCreativeTypeNativeAppInstallSquare          CreativeCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE"
	CreativeCreativeTypeEnumCreativeTypeAudio                           CreativeCreativeTypeEnum = "CREATIVE_TYPE_AUDIO"
	CreativeCreativeTypeEnumCreativeTypePublisherHosted                 CreativeCreativeTypeEnum = "CREATIVE_TYPE_PUBLISHER_HOSTED"
	CreativeCreativeTypeEnumCreativeTypeNativeVideo                     CreativeCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_VIDEO"
	CreativeCreativeTypeEnumCreativeTypeTemplatedAppInstallVideo        CreativeCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"
)

type CreativeEntityStatusEnum string

const (
	CreativeEntityStatusEnumEntityStatusUnspecified          CreativeEntityStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
	CreativeEntityStatusEnumEntityStatusActive               CreativeEntityStatusEnum = "ENTITY_STATUS_ACTIVE"
	CreativeEntityStatusEnumEntityStatusArchived             CreativeEntityStatusEnum = "ENTITY_STATUS_ARCHIVED"
	CreativeEntityStatusEnumEntityStatusDraft                CreativeEntityStatusEnum = "ENTITY_STATUS_DRAFT"
	CreativeEntityStatusEnumEntityStatusPaused               CreativeEntityStatusEnum = "ENTITY_STATUS_PAUSED"
	CreativeEntityStatusEnumEntityStatusScheduledForDeletion CreativeEntityStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)

type CreativeExpandingDirectionEnum string

const (
	CreativeExpandingDirectionEnumExpandingDirectionUnspecified  CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_UNSPECIFIED"
	CreativeExpandingDirectionEnumExpandingDirectionNone         CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_NONE"
	CreativeExpandingDirectionEnumExpandingDirectionUp           CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_UP"
	CreativeExpandingDirectionEnumExpandingDirectionDown         CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_DOWN"
	CreativeExpandingDirectionEnumExpandingDirectionLeft         CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_LEFT"
	CreativeExpandingDirectionEnumExpandingDirectionRight        CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_RIGHT"
	CreativeExpandingDirectionEnumExpandingDirectionUpAndLeft    CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_UP_AND_LEFT"
	CreativeExpandingDirectionEnumExpandingDirectionUpAndRight   CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_UP_AND_RIGHT"
	CreativeExpandingDirectionEnumExpandingDirectionDownAndLeft  CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_DOWN_AND_LEFT"
	CreativeExpandingDirectionEnumExpandingDirectionDownAndRight CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_DOWN_AND_RIGHT"
	CreativeExpandingDirectionEnumExpandingDirectionUpOrDown     CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_UP_OR_DOWN"
	CreativeExpandingDirectionEnumExpandingDirectionLeftOrRight  CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
	CreativeExpandingDirectionEnumExpandingDirectionAnyDiagonal  CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_ANY_DIAGONAL"
)

type CreativeHostingSourceEnum string

const (
	CreativeHostingSourceEnumHostingSourceUnspecified CreativeHostingSourceEnum = "HOSTING_SOURCE_UNSPECIFIED"
	CreativeHostingSourceEnumHostingSourceCm          CreativeHostingSourceEnum = "HOSTING_SOURCE_CM"
	CreativeHostingSourceEnumHostingSourceThirdParty  CreativeHostingSourceEnum = "HOSTING_SOURCE_THIRD_PARTY"
	CreativeHostingSourceEnumHostingSourceHosted      CreativeHostingSourceEnum = "HOSTING_SOURCE_HOSTED"
	CreativeHostingSourceEnumHostingSourceRichMedia   CreativeHostingSourceEnum = "HOSTING_SOURCE_RICH_MEDIA"
)

type Creative struct {
	AdditionalDimensions      []Dimensions                     `json:"additionalDimensions"`
	AdvertiserID              *string                          `json:"advertiserId"`
	AppendedTag               *string                          `json:"appendedTag"`
	Assets                    []AssetAssociation               `json:"assets"`
	CmPlacementID             *string                          `json:"cmPlacementId"`
	CmTrackingAd              *CmTrackingAd                    `json:"cmTrackingAd"`
	CompanionCreativeIds      []string                         `json:"companionCreativeIds"`
	CounterEvents             []CounterEvent                   `json:"counterEvents"`
	CreateTime                *string                          `json:"createTime"`
	CreativeAttributes        []CreativeCreativeAttributesEnum `json:"creativeAttributes"`
	CreativeID                *string                          `json:"creativeId"`
	CreativeType              *CreativeCreativeTypeEnum        `json:"creativeType"`
	Dimensions                *Dimensions                      `json:"dimensions"`
	DisplayName               *string                          `json:"displayName"`
	Dynamic                   *bool                            `json:"dynamic"`
	EntityStatus              *CreativeEntityStatusEnum        `json:"entityStatus"`
	ExitEvents                []ExitEvent                      `json:"exitEvents"`
	ExpandOnHover             *bool                            `json:"expandOnHover"`
	ExpandingDirection        *CreativeExpandingDirectionEnum  `json:"expandingDirection"`
	HostingSource             *CreativeHostingSourceEnum       `json:"hostingSource"`
	Html5Video                *bool                            `json:"html5Video"`
	IasCampaignMonitoring     *bool                            `json:"iasCampaignMonitoring"`
	IntegrationCode           *string                          `json:"integrationCode"`
	JsTrackerURL              *string                          `json:"jsTrackerUrl"`
	LineItemIds               []string                         `json:"lineItemIds"`
	MediaDuration             *string                          `json:"mediaDuration"`
	Mp3Audio                  *bool                            `json:"mp3Audio"`
	Name                      *string                          `json:"name"`
	Notes                     *string                          `json:"notes"`
	ObaIcon                   *ObaIcon                         `json:"obaIcon"`
	OggAudio                  *bool                            `json:"oggAudio"`
	ProgressOffset            *AudioVideoOffset                `json:"progressOffset"`
	RequireHtml5              *bool                            `json:"requireHtml5"`
	RequireMraid              *bool                            `json:"requireMraid"`
	RequirePingForAttribution *bool                            `json:"requirePingForAttribution"`
	ReviewStatus              *ReviewStatusInfo                `json:"reviewStatus"`
	SkipOffset                *AudioVideoOffset                `json:"skipOffset"`
	Skippable                 *bool                            `json:"skippable"`
	ThirdPartyTag             *string                          `json:"thirdPartyTag"`
	ThirdPartyUrls            []ThirdPartyURL                  `json:"thirdPartyUrls"`
	TimerEvents               []TimerEvent                     `json:"timerEvents"`
	TrackerUrls               []string                         `json:"trackerUrls"`
	Transcodes                []Transcode                      `json:"transcodes"`
	UniversalAdID             *UniversalAdID                   `json:"universalAdId"`
	UpdateTime                *string                          `json:"updateTime"`
	VastTagURL                *string                          `json:"vastTagUrl"`
	Vpaid                     *bool                            `json:"vpaid"`
}
