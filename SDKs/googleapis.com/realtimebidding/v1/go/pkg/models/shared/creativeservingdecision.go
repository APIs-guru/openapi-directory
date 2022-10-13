package shared

type CreativeServingDecisionDetectedAttributesEnum string

const (
	CreativeServingDecisionDetectedAttributesEnumAttributeUnspecified                CreativeServingDecisionDetectedAttributesEnum = "ATTRIBUTE_UNSPECIFIED"
	CreativeServingDecisionDetectedAttributesEnumImageRichMedia                      CreativeServingDecisionDetectedAttributesEnum = "IMAGE_RICH_MEDIA"
	CreativeServingDecisionDetectedAttributesEnumAdobeFlashFlv                       CreativeServingDecisionDetectedAttributesEnum = "ADOBE_FLASH_FLV"
	CreativeServingDecisionDetectedAttributesEnumIsTagged                            CreativeServingDecisionDetectedAttributesEnum = "IS_TAGGED"
	CreativeServingDecisionDetectedAttributesEnumIsCookieTargeted                    CreativeServingDecisionDetectedAttributesEnum = "IS_COOKIE_TARGETED"
	CreativeServingDecisionDetectedAttributesEnumIsUserInterestTargeted              CreativeServingDecisionDetectedAttributesEnum = "IS_USER_INTEREST_TARGETED"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionNone              CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_NONE"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionUp                CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_UP"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionDown              CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_DOWN"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionLeft              CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_LEFT"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionRight             CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_RIGHT"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionUpLeft            CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_UP_LEFT"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionUpRight           CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_UP_RIGHT"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionDownLeft          CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_DOWN_LEFT"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionDownRight         CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_DOWN_RIGHT"
	CreativeServingDecisionDetectedAttributesEnumCreativeTypeHTML                    CreativeServingDecisionDetectedAttributesEnum = "CREATIVE_TYPE_HTML"
	CreativeServingDecisionDetectedAttributesEnumCreativeTypeVastVideo               CreativeServingDecisionDetectedAttributesEnum = "CREATIVE_TYPE_VAST_VIDEO"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionUpOrDown          CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_UP_OR_DOWN"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionLeftOrRight       CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
	CreativeServingDecisionDetectedAttributesEnumExpandingDirectionAnyDiagonal       CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_DIRECTION_ANY_DIAGONAL"
	CreativeServingDecisionDetectedAttributesEnumExpandingActionRolloverToExpand     CreativeServingDecisionDetectedAttributesEnum = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND"
	CreativeServingDecisionDetectedAttributesEnumInstreamVastVideoTypeVpaidFlash     CreativeServingDecisionDetectedAttributesEnum = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH"
	CreativeServingDecisionDetectedAttributesEnumRichMediaCapabilityTypeMraid        CreativeServingDecisionDetectedAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_MRAID"
	CreativeServingDecisionDetectedAttributesEnumRichMediaCapabilityTypeFlash        CreativeServingDecisionDetectedAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_FLASH"
	CreativeServingDecisionDetectedAttributesEnumRichMediaCapabilityTypeHtml5        CreativeServingDecisionDetectedAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_HTML5"
	CreativeServingDecisionDetectedAttributesEnumSkippableInstreamVideo              CreativeServingDecisionDetectedAttributesEnum = "SKIPPABLE_INSTREAM_VIDEO"
	CreativeServingDecisionDetectedAttributesEnumRichMediaCapabilityTypeSsl          CreativeServingDecisionDetectedAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_SSL"
	CreativeServingDecisionDetectedAttributesEnumRichMediaCapabilityTypeNonSsl       CreativeServingDecisionDetectedAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL"
	CreativeServingDecisionDetectedAttributesEnumRichMediaCapabilityTypeInterstitial CreativeServingDecisionDetectedAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL"
	CreativeServingDecisionDetectedAttributesEnumNonSkippableInstreamVideo           CreativeServingDecisionDetectedAttributesEnum = "NON_SKIPPABLE_INSTREAM_VIDEO"
	CreativeServingDecisionDetectedAttributesEnumNativeEligibilityEligible           CreativeServingDecisionDetectedAttributesEnum = "NATIVE_ELIGIBILITY_ELIGIBLE"
	CreativeServingDecisionDetectedAttributesEnumNonVpaid                            CreativeServingDecisionDetectedAttributesEnum = "NON_VPAID"
	CreativeServingDecisionDetectedAttributesEnumNativeEligibilityNotEligible        CreativeServingDecisionDetectedAttributesEnum = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE"
	CreativeServingDecisionDetectedAttributesEnumAnyInterstitial                     CreativeServingDecisionDetectedAttributesEnum = "ANY_INTERSTITIAL"
	CreativeServingDecisionDetectedAttributesEnumNonInterstitial                     CreativeServingDecisionDetectedAttributesEnum = "NON_INTERSTITIAL"
	CreativeServingDecisionDetectedAttributesEnumInBannerVideo                       CreativeServingDecisionDetectedAttributesEnum = "IN_BANNER_VIDEO"
	CreativeServingDecisionDetectedAttributesEnumRenderingSizelessAdx                CreativeServingDecisionDetectedAttributesEnum = "RENDERING_SIZELESS_ADX"
	CreativeServingDecisionDetectedAttributesEnumOmsdk10                             CreativeServingDecisionDetectedAttributesEnum = "OMSDK_1_0"
)

type CreativeServingDecision struct {
	AdTechnologyProviders       *AdTechnologyProviders                          `json:"adTechnologyProviders"`
	ChinaPolicyCompliance       *PolicyCompliance                               `json:"chinaPolicyCompliance"`
	DealsPolicyCompliance       *PolicyCompliance                               `json:"dealsPolicyCompliance"`
	DetectedAdvertisers         []AdvertiserAndBrand                            `json:"detectedAdvertisers"`
	DetectedAttributes          []CreativeServingDecisionDetectedAttributesEnum `json:"detectedAttributes"`
	DetectedClickThroughUrls    []string                                        `json:"detectedClickThroughUrls"`
	DetectedDomains             []string                                        `json:"detectedDomains"`
	DetectedLanguages           []string                                        `json:"detectedLanguages"`
	DetectedProductCategories   []int32                                         `json:"detectedProductCategories"`
	DetectedSensitiveCategories []int32                                         `json:"detectedSensitiveCategories"`
	DetectedVendorIds           []int32                                         `json:"detectedVendorIds"`
	LastStatusUpdate            *string                                         `json:"lastStatusUpdate"`
	NetworkPolicyCompliance     *PolicyCompliance                               `json:"networkPolicyCompliance"`
	PlatformPolicyCompliance    *PolicyCompliance                               `json:"platformPolicyCompliance"`
	RussiaPolicyCompliance      *PolicyCompliance                               `json:"russiaPolicyCompliance"`
}
