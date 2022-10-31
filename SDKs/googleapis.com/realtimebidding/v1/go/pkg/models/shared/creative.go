package shared

type CreativeCreativeFormatEnum string

const (
	CreativeCreativeFormatEnumCreativeFormatUnspecified CreativeCreativeFormatEnum = "CREATIVE_FORMAT_UNSPECIFIED"
	CreativeCreativeFormatEnumHTML                      CreativeCreativeFormatEnum = "HTML"
	CreativeCreativeFormatEnumVideo                     CreativeCreativeFormatEnum = "VIDEO"
	CreativeCreativeFormatEnumNative                    CreativeCreativeFormatEnum = "NATIVE"
)

type CreativeDeclaredAttributesEnum string

const (
	CreativeDeclaredAttributesEnumAttributeUnspecified                CreativeDeclaredAttributesEnum = "ATTRIBUTE_UNSPECIFIED"
	CreativeDeclaredAttributesEnumImageRichMedia                      CreativeDeclaredAttributesEnum = "IMAGE_RICH_MEDIA"
	CreativeDeclaredAttributesEnumAdobeFlashFlv                       CreativeDeclaredAttributesEnum = "ADOBE_FLASH_FLV"
	CreativeDeclaredAttributesEnumIsTagged                            CreativeDeclaredAttributesEnum = "IS_TAGGED"
	CreativeDeclaredAttributesEnumIsCookieTargeted                    CreativeDeclaredAttributesEnum = "IS_COOKIE_TARGETED"
	CreativeDeclaredAttributesEnumIsUserInterestTargeted              CreativeDeclaredAttributesEnum = "IS_USER_INTEREST_TARGETED"
	CreativeDeclaredAttributesEnumExpandingDirectionNone              CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_NONE"
	CreativeDeclaredAttributesEnumExpandingDirectionUp                CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_UP"
	CreativeDeclaredAttributesEnumExpandingDirectionDown              CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_DOWN"
	CreativeDeclaredAttributesEnumExpandingDirectionLeft              CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_LEFT"
	CreativeDeclaredAttributesEnumExpandingDirectionRight             CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_RIGHT"
	CreativeDeclaredAttributesEnumExpandingDirectionUpLeft            CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_UP_LEFT"
	CreativeDeclaredAttributesEnumExpandingDirectionUpRight           CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_UP_RIGHT"
	CreativeDeclaredAttributesEnumExpandingDirectionDownLeft          CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_DOWN_LEFT"
	CreativeDeclaredAttributesEnumExpandingDirectionDownRight         CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_DOWN_RIGHT"
	CreativeDeclaredAttributesEnumCreativeTypeHTML                    CreativeDeclaredAttributesEnum = "CREATIVE_TYPE_HTML"
	CreativeDeclaredAttributesEnumCreativeTypeVastVideo               CreativeDeclaredAttributesEnum = "CREATIVE_TYPE_VAST_VIDEO"
	CreativeDeclaredAttributesEnumExpandingDirectionUpOrDown          CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_UP_OR_DOWN"
	CreativeDeclaredAttributesEnumExpandingDirectionLeftOrRight       CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
	CreativeDeclaredAttributesEnumExpandingDirectionAnyDiagonal       CreativeDeclaredAttributesEnum = "EXPANDING_DIRECTION_ANY_DIAGONAL"
	CreativeDeclaredAttributesEnumExpandingActionRolloverToExpand     CreativeDeclaredAttributesEnum = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND"
	CreativeDeclaredAttributesEnumInstreamVastVideoTypeVpaidFlash     CreativeDeclaredAttributesEnum = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH"
	CreativeDeclaredAttributesEnumRichMediaCapabilityTypeMraid        CreativeDeclaredAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_MRAID"
	CreativeDeclaredAttributesEnumRichMediaCapabilityTypeFlash        CreativeDeclaredAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_FLASH"
	CreativeDeclaredAttributesEnumRichMediaCapabilityTypeHtml5        CreativeDeclaredAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_HTML5"
	CreativeDeclaredAttributesEnumSkippableInstreamVideo              CreativeDeclaredAttributesEnum = "SKIPPABLE_INSTREAM_VIDEO"
	CreativeDeclaredAttributesEnumRichMediaCapabilityTypeSsl          CreativeDeclaredAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_SSL"
	CreativeDeclaredAttributesEnumRichMediaCapabilityTypeNonSsl       CreativeDeclaredAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL"
	CreativeDeclaredAttributesEnumRichMediaCapabilityTypeInterstitial CreativeDeclaredAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL"
	CreativeDeclaredAttributesEnumNonSkippableInstreamVideo           CreativeDeclaredAttributesEnum = "NON_SKIPPABLE_INSTREAM_VIDEO"
	CreativeDeclaredAttributesEnumNativeEligibilityEligible           CreativeDeclaredAttributesEnum = "NATIVE_ELIGIBILITY_ELIGIBLE"
	CreativeDeclaredAttributesEnumNonVpaid                            CreativeDeclaredAttributesEnum = "NON_VPAID"
	CreativeDeclaredAttributesEnumNativeEligibilityNotEligible        CreativeDeclaredAttributesEnum = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE"
	CreativeDeclaredAttributesEnumAnyInterstitial                     CreativeDeclaredAttributesEnum = "ANY_INTERSTITIAL"
	CreativeDeclaredAttributesEnumNonInterstitial                     CreativeDeclaredAttributesEnum = "NON_INTERSTITIAL"
	CreativeDeclaredAttributesEnumInBannerVideo                       CreativeDeclaredAttributesEnum = "IN_BANNER_VIDEO"
	CreativeDeclaredAttributesEnumRenderingSizelessAdx                CreativeDeclaredAttributesEnum = "RENDERING_SIZELESS_ADX"
	CreativeDeclaredAttributesEnumOmsdk10                             CreativeDeclaredAttributesEnum = "OMSDK_1_0"
)

type CreativeDeclaredRestrictedCategoriesEnum string

const (
	CreativeDeclaredRestrictedCategoriesEnumRestrictedCategoryUnspecified CreativeDeclaredRestrictedCategoriesEnum = "RESTRICTED_CATEGORY_UNSPECIFIED"
	CreativeDeclaredRestrictedCategoriesEnumAlcohol                       CreativeDeclaredRestrictedCategoriesEnum = "ALCOHOL"
)

type CreativeRestrictedCategoriesEnum string

const (
	CreativeRestrictedCategoriesEnumRestrictedCategoryUnspecified CreativeRestrictedCategoriesEnum = "RESTRICTED_CATEGORY_UNSPECIFIED"
	CreativeRestrictedCategoriesEnumAlcohol                       CreativeRestrictedCategoriesEnum = "ALCOHOL"
)

type Creative struct {
	AccountID                    *string                                    `json:"accountId,omitempty"`
	AdChoicesDestinationURL      *string                                    `json:"adChoicesDestinationUrl,omitempty"`
	AdvertiserName               *string                                    `json:"advertiserName,omitempty"`
	AgencyID                     *string                                    `json:"agencyId,omitempty"`
	APIUpdateTime                *string                                    `json:"apiUpdateTime,omitempty"`
	CreativeFormat               *CreativeCreativeFormatEnum                `json:"creativeFormat,omitempty"`
	CreativeID                   *string                                    `json:"creativeId,omitempty"`
	CreativeServingDecision      *CreativeServingDecision                   `json:"creativeServingDecision,omitempty"`
	DealIds                      []string                                   `json:"dealIds,omitempty"`
	DeclaredAttributes           []CreativeDeclaredAttributesEnum           `json:"declaredAttributes,omitempty"`
	DeclaredClickThroughUrls     []string                                   `json:"declaredClickThroughUrls,omitempty"`
	DeclaredRestrictedCategories []CreativeDeclaredRestrictedCategoriesEnum `json:"declaredRestrictedCategories,omitempty"`
	DeclaredVendorIds            []int32                                    `json:"declaredVendorIds,omitempty"`
	HTML                         *HTMLContent                               `json:"html,omitempty"`
	ImpressionTrackingUrls       []string                                   `json:"impressionTrackingUrls,omitempty"`
	Name                         *string                                    `json:"name,omitempty"`
	Native                       *NativeContent                             `json:"native,omitempty"`
	RenderURL                    *string                                    `json:"renderUrl,omitempty"`
	RestrictedCategories         []CreativeRestrictedCategoriesEnum         `json:"restrictedCategories,omitempty"`
	Version                      *int32                                     `json:"version,omitempty"`
	Video                        *VideoContent                              `json:"video,omitempty"`
}
