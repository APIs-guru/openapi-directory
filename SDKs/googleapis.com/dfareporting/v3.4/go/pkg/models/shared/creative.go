package shared

type CreativeArtworkTypeEnum string

const (
	CreativeArtworkTypeEnumArtworkTypeFlash CreativeArtworkTypeEnum = "ARTWORK_TYPE_FLASH"
	CreativeArtworkTypeEnumArtworkTypeHtml5 CreativeArtworkTypeEnum = "ARTWORK_TYPE_HTML5"
	CreativeArtworkTypeEnumArtworkTypeMixed CreativeArtworkTypeEnum = "ARTWORK_TYPE_MIXED"
	CreativeArtworkTypeEnumArtworkTypeImage CreativeArtworkTypeEnum = "ARTWORK_TYPE_IMAGE"
)

type CreativeAuthoringSourceEnum string

const (
	CreativeAuthoringSourceEnumCreativeAuthoringSourceDcm    CreativeAuthoringSourceEnum = "CREATIVE_AUTHORING_SOURCE_DCM"
	CreativeAuthoringSourceEnumCreativeAuthoringSourceDbm    CreativeAuthoringSourceEnum = "CREATIVE_AUTHORING_SOURCE_DBM"
	CreativeAuthoringSourceEnumCreativeAuthoringSourceStudio CreativeAuthoringSourceEnum = "CREATIVE_AUTHORING_SOURCE_STUDIO"
	CreativeAuthoringSourceEnumCreativeAuthoringSourceGwd    CreativeAuthoringSourceEnum = "CREATIVE_AUTHORING_SOURCE_GWD"
)

type CreativeAuthoringToolEnum string

const (
	CreativeAuthoringToolEnumNinja  CreativeAuthoringToolEnum = "NINJA"
	CreativeAuthoringToolEnumSwiffy CreativeAuthoringToolEnum = "SWIFFY"
)

type CreativeBackupImageFeaturesEnum string

const (
	CreativeBackupImageFeaturesEnumCSSFontFace            CreativeBackupImageFeaturesEnum = "CSS_FONT_FACE"
	CreativeBackupImageFeaturesEnumCSSBackgroundSize      CreativeBackupImageFeaturesEnum = "CSS_BACKGROUND_SIZE"
	CreativeBackupImageFeaturesEnumCSSBorderImage         CreativeBackupImageFeaturesEnum = "CSS_BORDER_IMAGE"
	CreativeBackupImageFeaturesEnumCSSBorderRadius        CreativeBackupImageFeaturesEnum = "CSS_BORDER_RADIUS"
	CreativeBackupImageFeaturesEnumCSSBoxShadow           CreativeBackupImageFeaturesEnum = "CSS_BOX_SHADOW"
	CreativeBackupImageFeaturesEnumCSSFlexBox             CreativeBackupImageFeaturesEnum = "CSS_FLEX_BOX"
	CreativeBackupImageFeaturesEnumCSSHsla                CreativeBackupImageFeaturesEnum = "CSS_HSLA"
	CreativeBackupImageFeaturesEnumCSSMultipleBgs         CreativeBackupImageFeaturesEnum = "CSS_MULTIPLE_BGS"
	CreativeBackupImageFeaturesEnumCSSOpacity             CreativeBackupImageFeaturesEnum = "CSS_OPACITY"
	CreativeBackupImageFeaturesEnumCSSRgba                CreativeBackupImageFeaturesEnum = "CSS_RGBA"
	CreativeBackupImageFeaturesEnumCSSTextShadow          CreativeBackupImageFeaturesEnum = "CSS_TEXT_SHADOW"
	CreativeBackupImageFeaturesEnumCSSAnimations          CreativeBackupImageFeaturesEnum = "CSS_ANIMATIONS"
	CreativeBackupImageFeaturesEnumCSSColumns             CreativeBackupImageFeaturesEnum = "CSS_COLUMNS"
	CreativeBackupImageFeaturesEnumCSSGeneratedContent    CreativeBackupImageFeaturesEnum = "CSS_GENERATED_CONTENT"
	CreativeBackupImageFeaturesEnumCSSGradients           CreativeBackupImageFeaturesEnum = "CSS_GRADIENTS"
	CreativeBackupImageFeaturesEnumCSSReflections         CreativeBackupImageFeaturesEnum = "CSS_REFLECTIONS"
	CreativeBackupImageFeaturesEnumCSSTransforms          CreativeBackupImageFeaturesEnum = "CSS_TRANSFORMS"
	CreativeBackupImageFeaturesEnumCSSTransforms3D        CreativeBackupImageFeaturesEnum = "CSS_TRANSFORMS3D"
	CreativeBackupImageFeaturesEnumCSSTransitions         CreativeBackupImageFeaturesEnum = "CSS_TRANSITIONS"
	CreativeBackupImageFeaturesEnumApplicationCache       CreativeBackupImageFeaturesEnum = "APPLICATION_CACHE"
	CreativeBackupImageFeaturesEnumCanvas                 CreativeBackupImageFeaturesEnum = "CANVAS"
	CreativeBackupImageFeaturesEnumCanvasText             CreativeBackupImageFeaturesEnum = "CANVAS_TEXT"
	CreativeBackupImageFeaturesEnumDragAndDrop            CreativeBackupImageFeaturesEnum = "DRAG_AND_DROP"
	CreativeBackupImageFeaturesEnumHashChange             CreativeBackupImageFeaturesEnum = "HASH_CHANGE"
	CreativeBackupImageFeaturesEnumHistory                CreativeBackupImageFeaturesEnum = "HISTORY"
	CreativeBackupImageFeaturesEnumAudio                  CreativeBackupImageFeaturesEnum = "AUDIO"
	CreativeBackupImageFeaturesEnumVideo                  CreativeBackupImageFeaturesEnum = "VIDEO"
	CreativeBackupImageFeaturesEnumIndexedDb              CreativeBackupImageFeaturesEnum = "INDEXED_DB"
	CreativeBackupImageFeaturesEnumInputAttrAutocomplete  CreativeBackupImageFeaturesEnum = "INPUT_ATTR_AUTOCOMPLETE"
	CreativeBackupImageFeaturesEnumInputAttrAutofocus     CreativeBackupImageFeaturesEnum = "INPUT_ATTR_AUTOFOCUS"
	CreativeBackupImageFeaturesEnumInputAttrList          CreativeBackupImageFeaturesEnum = "INPUT_ATTR_LIST"
	CreativeBackupImageFeaturesEnumInputAttrPlaceholder   CreativeBackupImageFeaturesEnum = "INPUT_ATTR_PLACEHOLDER"
	CreativeBackupImageFeaturesEnumInputAttrMax           CreativeBackupImageFeaturesEnum = "INPUT_ATTR_MAX"
	CreativeBackupImageFeaturesEnumInputAttrMin           CreativeBackupImageFeaturesEnum = "INPUT_ATTR_MIN"
	CreativeBackupImageFeaturesEnumInputAttrMultiple      CreativeBackupImageFeaturesEnum = "INPUT_ATTR_MULTIPLE"
	CreativeBackupImageFeaturesEnumInputAttrPattern       CreativeBackupImageFeaturesEnum = "INPUT_ATTR_PATTERN"
	CreativeBackupImageFeaturesEnumInputAttrRequired      CreativeBackupImageFeaturesEnum = "INPUT_ATTR_REQUIRED"
	CreativeBackupImageFeaturesEnumInputAttrStep          CreativeBackupImageFeaturesEnum = "INPUT_ATTR_STEP"
	CreativeBackupImageFeaturesEnumInputTypeSearch        CreativeBackupImageFeaturesEnum = "INPUT_TYPE_SEARCH"
	CreativeBackupImageFeaturesEnumInputTypeTel           CreativeBackupImageFeaturesEnum = "INPUT_TYPE_TEL"
	CreativeBackupImageFeaturesEnumInputTypeURL           CreativeBackupImageFeaturesEnum = "INPUT_TYPE_URL"
	CreativeBackupImageFeaturesEnumInputTypeEmail         CreativeBackupImageFeaturesEnum = "INPUT_TYPE_EMAIL"
	CreativeBackupImageFeaturesEnumInputTypeDatetime      CreativeBackupImageFeaturesEnum = "INPUT_TYPE_DATETIME"
	CreativeBackupImageFeaturesEnumInputTypeDate          CreativeBackupImageFeaturesEnum = "INPUT_TYPE_DATE"
	CreativeBackupImageFeaturesEnumInputTypeMonth         CreativeBackupImageFeaturesEnum = "INPUT_TYPE_MONTH"
	CreativeBackupImageFeaturesEnumInputTypeWeek          CreativeBackupImageFeaturesEnum = "INPUT_TYPE_WEEK"
	CreativeBackupImageFeaturesEnumInputTypeTime          CreativeBackupImageFeaturesEnum = "INPUT_TYPE_TIME"
	CreativeBackupImageFeaturesEnumInputTypeDatetimeLocal CreativeBackupImageFeaturesEnum = "INPUT_TYPE_DATETIME_LOCAL"
	CreativeBackupImageFeaturesEnumInputTypeNumber        CreativeBackupImageFeaturesEnum = "INPUT_TYPE_NUMBER"
	CreativeBackupImageFeaturesEnumInputTypeRange         CreativeBackupImageFeaturesEnum = "INPUT_TYPE_RANGE"
	CreativeBackupImageFeaturesEnumInputTypeColor         CreativeBackupImageFeaturesEnum = "INPUT_TYPE_COLOR"
	CreativeBackupImageFeaturesEnumLocalStorage           CreativeBackupImageFeaturesEnum = "LOCAL_STORAGE"
	CreativeBackupImageFeaturesEnumPostMessage            CreativeBackupImageFeaturesEnum = "POST_MESSAGE"
	CreativeBackupImageFeaturesEnumSessionStorage         CreativeBackupImageFeaturesEnum = "SESSION_STORAGE"
	CreativeBackupImageFeaturesEnumWebSockets             CreativeBackupImageFeaturesEnum = "WEB_SOCKETS"
	CreativeBackupImageFeaturesEnumWebSQLDatabase         CreativeBackupImageFeaturesEnum = "WEB_SQL_DATABASE"
	CreativeBackupImageFeaturesEnumWebWorkers             CreativeBackupImageFeaturesEnum = "WEB_WORKERS"
	CreativeBackupImageFeaturesEnumGeoLocation            CreativeBackupImageFeaturesEnum = "GEO_LOCATION"
	CreativeBackupImageFeaturesEnumInlineSvg              CreativeBackupImageFeaturesEnum = "INLINE_SVG"
	CreativeBackupImageFeaturesEnumSmil                   CreativeBackupImageFeaturesEnum = "SMIL"
	CreativeBackupImageFeaturesEnumSvgHref                CreativeBackupImageFeaturesEnum = "SVG_HREF"
	CreativeBackupImageFeaturesEnumSvgClipPaths           CreativeBackupImageFeaturesEnum = "SVG_CLIP_PATHS"
	CreativeBackupImageFeaturesEnumTouch                  CreativeBackupImageFeaturesEnum = "TOUCH"
	CreativeBackupImageFeaturesEnumWebgl                  CreativeBackupImageFeaturesEnum = "WEBGL"
	CreativeBackupImageFeaturesEnumSvgFilters             CreativeBackupImageFeaturesEnum = "SVG_FILTERS"
	CreativeBackupImageFeaturesEnumSvgFeImage             CreativeBackupImageFeaturesEnum = "SVG_FE_IMAGE"
)

type CreativeCompatibilityEnum string

const (
	CreativeCompatibilityEnumDisplay             CreativeCompatibilityEnum = "DISPLAY"
	CreativeCompatibilityEnumDisplayInterstitial CreativeCompatibilityEnum = "DISPLAY_INTERSTITIAL"
	CreativeCompatibilityEnumApp                 CreativeCompatibilityEnum = "APP"
	CreativeCompatibilityEnumAppInterstitial     CreativeCompatibilityEnum = "APP_INTERSTITIAL"
	CreativeCompatibilityEnumInStreamVideo       CreativeCompatibilityEnum = "IN_STREAM_VIDEO"
	CreativeCompatibilityEnumInStreamAudio       CreativeCompatibilityEnum = "IN_STREAM_AUDIO"
)

type CreativeTypeEnum string

const (
	CreativeTypeEnumImage                                     CreativeTypeEnum = "IMAGE"
	CreativeTypeEnumDisplayRedirect                           CreativeTypeEnum = "DISPLAY_REDIRECT"
	CreativeTypeEnumCustomDisplay                             CreativeTypeEnum = "CUSTOM_DISPLAY"
	CreativeTypeEnumInternalRedirect                          CreativeTypeEnum = "INTERNAL_REDIRECT"
	CreativeTypeEnumCustomDisplayInterstitial                 CreativeTypeEnum = "CUSTOM_DISPLAY_INTERSTITIAL"
	CreativeTypeEnumInterstitialInternalRedirect              CreativeTypeEnum = "INTERSTITIAL_INTERNAL_REDIRECT"
	CreativeTypeEnumTrackingText                              CreativeTypeEnum = "TRACKING_TEXT"
	CreativeTypeEnumRichMediaDisplayBanner                    CreativeTypeEnum = "RICH_MEDIA_DISPLAY_BANNER"
	CreativeTypeEnumRichMediaInpageFloating                   CreativeTypeEnum = "RICH_MEDIA_INPAGE_FLOATING"
	CreativeTypeEnumRichMediaImExpand                         CreativeTypeEnum = "RICH_MEDIA_IM_EXPAND"
	CreativeTypeEnumRichMediaDisplayExpanding                 CreativeTypeEnum = "RICH_MEDIA_DISPLAY_EXPANDING"
	CreativeTypeEnumRichMediaDisplayInterstitial              CreativeTypeEnum = "RICH_MEDIA_DISPLAY_INTERSTITIAL"
	CreativeTypeEnumRichMediaDisplayMultiFloatingInterstitial CreativeTypeEnum = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL"
	CreativeTypeEnumRichMediaMobileInApp                      CreativeTypeEnum = "RICH_MEDIA_MOBILE_IN_APP"
	CreativeTypeEnumFlashInpage                               CreativeTypeEnum = "FLASH_INPAGE"
	CreativeTypeEnumInstreamVideo                             CreativeTypeEnum = "INSTREAM_VIDEO"
	CreativeTypeEnumVpaidLinearVideo                          CreativeTypeEnum = "VPAID_LINEAR_VIDEO"
	CreativeTypeEnumVpaidNonLinearVideo                       CreativeTypeEnum = "VPAID_NON_LINEAR_VIDEO"
	CreativeTypeEnumInstreamVideoRedirect                     CreativeTypeEnum = "INSTREAM_VIDEO_REDIRECT"
	CreativeTypeEnumRichMediaPeelDown                         CreativeTypeEnum = "RICH_MEDIA_PEEL_DOWN"
	CreativeTypeEnumHtml5Banner                               CreativeTypeEnum = "HTML5_BANNER"
	CreativeTypeEnumDisplay                                   CreativeTypeEnum = "DISPLAY"
	CreativeTypeEnumDisplayImageGallery                       CreativeTypeEnum = "DISPLAY_IMAGE_GALLERY"
	CreativeTypeEnumBrandSafeDefaultInstreamVideo             CreativeTypeEnum = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO"
	CreativeTypeEnumInstreamAudio                             CreativeTypeEnum = "INSTREAM_AUDIO"
)

type Creative struct {
	AccountID                           *string                           `json:"accountId,omitempty"`
	Active                              *bool                             `json:"active,omitempty"`
	AdParameters                        *string                           `json:"adParameters,omitempty"`
	AdTagKeys                           []string                          `json:"adTagKeys,omitempty"`
	AdditionalSizes                     []Size                            `json:"additionalSizes,omitempty"`
	AdvertiserID                        *string                           `json:"advertiserId,omitempty"`
	AllowScriptAccess                   *bool                             `json:"allowScriptAccess,omitempty"`
	Archived                            *bool                             `json:"archived,omitempty"`
	ArtworkType                         *CreativeArtworkTypeEnum          `json:"artworkType,omitempty"`
	AuthoringSource                     *CreativeAuthoringSourceEnum      `json:"authoringSource,omitempty"`
	AuthoringTool                       *CreativeAuthoringToolEnum        `json:"authoringTool,omitempty"`
	AutoAdvanceImages                   *bool                             `json:"autoAdvanceImages,omitempty"`
	BackgroundColor                     *string                           `json:"backgroundColor,omitempty"`
	BackupImageClickThroughURL          *CreativeClickThroughURL          `json:"backupImageClickThroughUrl,omitempty"`
	BackupImageFeatures                 []CreativeBackupImageFeaturesEnum `json:"backupImageFeatures,omitempty"`
	BackupImageReportingLabel           *string                           `json:"backupImageReportingLabel,omitempty"`
	BackupImageTargetWindow             *TargetWindow                     `json:"backupImageTargetWindow,omitempty"`
	ClickTags                           []ClickTag                        `json:"clickTags,omitempty"`
	CommercialID                        *string                           `json:"commercialId,omitempty"`
	CompanionCreatives                  []string                          `json:"companionCreatives,omitempty"`
	Compatibility                       []CreativeCompatibilityEnum       `json:"compatibility,omitempty"`
	ConvertFlashToHtml5                 *bool                             `json:"convertFlashToHtml5,omitempty"`
	CounterCustomEvents                 []CreativeCustomEvent             `json:"counterCustomEvents,omitempty"`
	CreativeAssetSelection              *CreativeAssetSelection           `json:"creativeAssetSelection,omitempty"`
	CreativeAssets                      []CreativeAsset                   `json:"creativeAssets,omitempty"`
	CreativeFieldAssignments            []CreativeFieldAssignment         `json:"creativeFieldAssignments,omitempty"`
	CustomKeyValues                     []string                          `json:"customKeyValues,omitempty"`
	DynamicAssetSelection               *bool                             `json:"dynamicAssetSelection,omitempty"`
	ExitCustomEvents                    []CreativeCustomEvent             `json:"exitCustomEvents,omitempty"`
	FsCommand                           *FsCommand                        `json:"fsCommand,omitempty"`
	HTMLCode                            *string                           `json:"htmlCode,omitempty"`
	HTMLCodeLocked                      *bool                             `json:"htmlCodeLocked,omitempty"`
	ID                                  *string                           `json:"id,omitempty"`
	IDDimensionValue                    *DimensionValue                   `json:"idDimensionValue,omitempty"`
	Kind                                *string                           `json:"kind,omitempty"`
	LastModifiedInfo                    *LastModifiedInfo                 `json:"lastModifiedInfo,omitempty"`
	LatestTraffickedCreativeID          *string                           `json:"latestTraffickedCreativeId,omitempty"`
	MediaDescription                    *string                           `json:"mediaDescription,omitempty"`
	MediaDuration                       *float32                          `json:"mediaDuration,omitempty"`
	Name                                *string                           `json:"name,omitempty"`
	ObaIcon                             *ObaIcon                          `json:"obaIcon,omitempty"`
	OverrideCSS                         *string                           `json:"overrideCss,omitempty"`
	ProgressOffset                      *VideoOffset                      `json:"progressOffset,omitempty"`
	RedirectURL                         *string                           `json:"redirectUrl,omitempty"`
	RenderingID                         *string                           `json:"renderingId,omitempty"`
	RenderingIDDimensionValue           *DimensionValue                   `json:"renderingIdDimensionValue,omitempty"`
	RequiredFlashPluginVersion          *string                           `json:"requiredFlashPluginVersion,omitempty"`
	RequiredFlashVersion                *int32                            `json:"requiredFlashVersion,omitempty"`
	Size                                *Size                             `json:"size,omitempty"`
	SkipOffset                          *VideoOffset                      `json:"skipOffset,omitempty"`
	Skippable                           *bool                             `json:"skippable,omitempty"`
	SslCompliant                        *bool                             `json:"sslCompliant,omitempty"`
	SslOverride                         *bool                             `json:"sslOverride,omitempty"`
	StudioAdvertiserID                  *string                           `json:"studioAdvertiserId,omitempty"`
	StudioCreativeID                    *string                           `json:"studioCreativeId,omitempty"`
	StudioTraffickedCreativeID          *string                           `json:"studioTraffickedCreativeId,omitempty"`
	SubaccountID                        *string                           `json:"subaccountId,omitempty"`
	ThirdPartyBackupImageImpressionsURL *string                           `json:"thirdPartyBackupImageImpressionsUrl,omitempty"`
	ThirdPartyRichMediaImpressionsURL   *string                           `json:"thirdPartyRichMediaImpressionsUrl,omitempty"`
	ThirdPartyUrls                      []ThirdPartyTrackingURL           `json:"thirdPartyUrls,omitempty"`
	TimerCustomEvents                   []CreativeCustomEvent             `json:"timerCustomEvents,omitempty"`
	TotalFileSize                       *string                           `json:"totalFileSize,omitempty"`
	Type                                *CreativeTypeEnum                 `json:"type,omitempty"`
	UniversalAdID                       *UniversalAdID                    `json:"universalAdId,omitempty"`
	Version                             *int32                            `json:"version,omitempty"`
}
