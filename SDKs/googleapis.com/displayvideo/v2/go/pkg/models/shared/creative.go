package shared




type CreativeCreativeAttributesEnum string

const (
    CreativeCreativeAttributesEnumCreativeAttributeUnspecified CreativeCreativeAttributesEnum = "CREATIVE_ATTRIBUTE_UNSPECIFIED"
CreativeCreativeAttributesEnumCreativeAttributeVast CreativeCreativeAttributesEnum = "CREATIVE_ATTRIBUTE_VAST"
CreativeCreativeAttributesEnumCreativeAttributeVpaidLinear CreativeCreativeAttributesEnum = "CREATIVE_ATTRIBUTE_VPAID_LINEAR"
CreativeCreativeAttributesEnumCreativeAttributeVpaidNonLinear CreativeCreativeAttributesEnum = "CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR"
)



type CreativeCreativeTypeEnum string

const (
    CreativeCreativeTypeEnumCreativeTypeUnspecified CreativeCreativeTypeEnum = "CREATIVE_TYPE_UNSPECIFIED"
CreativeCreativeTypeEnumCreativeTypeStandard CreativeCreativeTypeEnum = "CREATIVE_TYPE_STANDARD"
CreativeCreativeTypeEnumCreativeTypeExpandable CreativeCreativeTypeEnum = "CREATIVE_TYPE_EXPANDABLE"
CreativeCreativeTypeEnumCreativeTypeVideo CreativeCreativeTypeEnum = "CREATIVE_TYPE_VIDEO"
CreativeCreativeTypeEnumCreativeTypeNative CreativeCreativeTypeEnum = "CREATIVE_TYPE_NATIVE"
CreativeCreativeTypeEnumCreativeTypeTemplatedAppInstall CreativeCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL"
CreativeCreativeTypeEnumCreativeTypeNativeSiteSquare CreativeCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_SITE_SQUARE"
CreativeCreativeTypeEnumCreativeTypeTemplatedAppInstallInterstitial CreativeCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL"
CreativeCreativeTypeEnumCreativeTypeLightbox CreativeCreativeTypeEnum = "CREATIVE_TYPE_LIGHTBOX"
CreativeCreativeTypeEnumCreativeTypeNativeAppInstall CreativeCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_APP_INSTALL"
CreativeCreativeTypeEnumCreativeTypeNativeAppInstallSquare CreativeCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE"
CreativeCreativeTypeEnumCreativeTypeAudio CreativeCreativeTypeEnum = "CREATIVE_TYPE_AUDIO"
CreativeCreativeTypeEnumCreativeTypePublisherHosted CreativeCreativeTypeEnum = "CREATIVE_TYPE_PUBLISHER_HOSTED"
CreativeCreativeTypeEnumCreativeTypeNativeVideo CreativeCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_VIDEO"
CreativeCreativeTypeEnumCreativeTypeTemplatedAppInstallVideo CreativeCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"
)



type CreativeEntityStatusEnum string

const (
    CreativeEntityStatusEnumEntityStatusUnspecified CreativeEntityStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
CreativeEntityStatusEnumEntityStatusActive CreativeEntityStatusEnum = "ENTITY_STATUS_ACTIVE"
CreativeEntityStatusEnumEntityStatusArchived CreativeEntityStatusEnum = "ENTITY_STATUS_ARCHIVED"
CreativeEntityStatusEnumEntityStatusDraft CreativeEntityStatusEnum = "ENTITY_STATUS_DRAFT"
CreativeEntityStatusEnumEntityStatusPaused CreativeEntityStatusEnum = "ENTITY_STATUS_PAUSED"
CreativeEntityStatusEnumEntityStatusScheduledForDeletion CreativeEntityStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)



type CreativeExpandingDirectionEnum string

const (
    CreativeExpandingDirectionEnumExpandingDirectionUnspecified CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_UNSPECIFIED"
CreativeExpandingDirectionEnumExpandingDirectionNone CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_NONE"
CreativeExpandingDirectionEnumExpandingDirectionUp CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_UP"
CreativeExpandingDirectionEnumExpandingDirectionDown CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_DOWN"
CreativeExpandingDirectionEnumExpandingDirectionLeft CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_LEFT"
CreativeExpandingDirectionEnumExpandingDirectionRight CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_RIGHT"
CreativeExpandingDirectionEnumExpandingDirectionUpAndLeft CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_UP_AND_LEFT"
CreativeExpandingDirectionEnumExpandingDirectionUpAndRight CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_UP_AND_RIGHT"
CreativeExpandingDirectionEnumExpandingDirectionDownAndLeft CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_DOWN_AND_LEFT"
CreativeExpandingDirectionEnumExpandingDirectionDownAndRight CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_DOWN_AND_RIGHT"
CreativeExpandingDirectionEnumExpandingDirectionUpOrDown CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_UP_OR_DOWN"
CreativeExpandingDirectionEnumExpandingDirectionLeftOrRight CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
CreativeExpandingDirectionEnumExpandingDirectionAnyDiagonal CreativeExpandingDirectionEnum = "EXPANDING_DIRECTION_ANY_DIAGONAL"
)



type CreativeHostingSourceEnum string

const (
    CreativeHostingSourceEnumHostingSourceUnspecified CreativeHostingSourceEnum = "HOSTING_SOURCE_UNSPECIFIED"
CreativeHostingSourceEnumHostingSourceCm CreativeHostingSourceEnum = "HOSTING_SOURCE_CM"
CreativeHostingSourceEnumHostingSourceThirdParty CreativeHostingSourceEnum = "HOSTING_SOURCE_THIRD_PARTY"
CreativeHostingSourceEnumHostingSourceHosted CreativeHostingSourceEnum = "HOSTING_SOURCE_HOSTED"
CreativeHostingSourceEnumHostingSourceRichMedia CreativeHostingSourceEnum = "HOSTING_SOURCE_RICH_MEDIA"
)


type Creative struct {
    AdditionalDimensions []Dimensions `json:"additionalDimensions,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    AppendedTag *string `json:"appendedTag,omitempty"`
    Assets []AssetAssociation `json:"assets,omitempty"`
    CmPlacementID *string `json:"cmPlacementId,omitempty"`
    CmTrackingAd *CmTrackingAd `json:"cmTrackingAd,omitempty"`
    CompanionCreativeIds []string `json:"companionCreativeIds,omitempty"`
    CounterEvents []CounterEvent `json:"counterEvents,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    CreativeAttributes []CreativeCreativeAttributesEnum `json:"creativeAttributes,omitempty"`
    CreativeID *string `json:"creativeId,omitempty"`
    CreativeType *CreativeCreativeTypeEnum `json:"creativeType,omitempty"`
    Dimensions *Dimensions `json:"dimensions,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Dynamic *bool `json:"dynamic,omitempty"`
    EntityStatus *CreativeEntityStatusEnum `json:"entityStatus,omitempty"`
    ExitEvents []ExitEvent `json:"exitEvents,omitempty"`
    ExpandOnHover *bool `json:"expandOnHover,omitempty"`
    ExpandingDirection *CreativeExpandingDirectionEnum `json:"expandingDirection,omitempty"`
    HostingSource *CreativeHostingSourceEnum `json:"hostingSource,omitempty"`
    Html5Video *bool `json:"html5Video,omitempty"`
    IasCampaignMonitoring *bool `json:"iasCampaignMonitoring,omitempty"`
    IntegrationCode *string `json:"integrationCode,omitempty"`
    JsTrackerURL *string `json:"jsTrackerUrl,omitempty"`
    LineItemIds []string `json:"lineItemIds,omitempty"`
    MediaDuration *string `json:"mediaDuration,omitempty"`
    Mp3Audio *bool `json:"mp3Audio,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    ObaIcon *ObaIcon `json:"obaIcon,omitempty"`
    OggAudio *bool `json:"oggAudio,omitempty"`
    ProgressOffset *AudioVideoOffset `json:"progressOffset,omitempty"`
    RequireHtml5 *bool `json:"requireHtml5,omitempty"`
    RequireMraid *bool `json:"requireMraid,omitempty"`
    RequirePingForAttribution *bool `json:"requirePingForAttribution,omitempty"`
    ReviewStatus *ReviewStatusInfo `json:"reviewStatus,omitempty"`
    SkipOffset *AudioVideoOffset `json:"skipOffset,omitempty"`
    Skippable *bool `json:"skippable,omitempty"`
    ThirdPartyTag *string `json:"thirdPartyTag,omitempty"`
    ThirdPartyUrls []ThirdPartyURL `json:"thirdPartyUrls,omitempty"`
    TimerEvents []TimerEvent `json:"timerEvents,omitempty"`
    TrackerUrls []string `json:"trackerUrls,omitempty"`
    Transcodes []Transcode `json:"transcodes,omitempty"`
    UniversalAdID *UniversalAdID `json:"universalAdId,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    VastTagURL *string `json:"vastTagUrl,omitempty"`
    Vpaid *bool `json:"vpaid,omitempty"`
    
}

