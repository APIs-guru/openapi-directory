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
	CreativeAuthoringSourceEnumCreativeAuthoringSourceAcs    CreativeAuthoringSourceEnum = "CREATIVE_AUTHORING_SOURCE_ACS"
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
	AccountID                           *string                           `json:"accountId"`
	Active                              *bool                             `json:"active"`
	AdParameters                        *string                           `json:"adParameters"`
	AdTagKeys                           []string                          `json:"adTagKeys"`
	AdditionalSizes                     []Size                            `json:"additionalSizes"`
	AdvertiserID                        *string                           `json:"advertiserId"`
	AllowScriptAccess                   *bool                             `json:"allowScriptAccess"`
	Archived                            *bool                             `json:"archived"`
	ArtworkType                         *CreativeArtworkTypeEnum          `json:"artworkType"`
	AuthoringSource                     *CreativeAuthoringSourceEnum      `json:"authoringSource"`
	AuthoringTool                       *CreativeAuthoringToolEnum        `json:"authoringTool"`
	AutoAdvanceImages                   *bool                             `json:"autoAdvanceImages"`
	BackgroundColor                     *string                           `json:"backgroundColor"`
	BackupImageClickThroughURL          *CreativeClickThroughURL          `json:"backupImageClickThroughUrl"`
	BackupImageFeatures                 []CreativeBackupImageFeaturesEnum `json:"backupImageFeatures"`
	BackupImageReportingLabel           *string                           `json:"backupImageReportingLabel"`
	BackupImageTargetWindow             *TargetWindow                     `json:"backupImageTargetWindow"`
	ClickTags                           []ClickTag                        `json:"clickTags"`
	CommercialID                        *string                           `json:"commercialId"`
	CompanionCreatives                  []string                          `json:"companionCreatives"`
	Compatibility                       []CreativeCompatibilityEnum       `json:"compatibility"`
	ConvertFlashToHtml5                 *bool                             `json:"convertFlashToHtml5"`
	CounterCustomEvents                 []CreativeCustomEvent             `json:"counterCustomEvents"`
	CreativeAssetSelection              *CreativeAssetSelection           `json:"creativeAssetSelection"`
	CreativeAssets                      []CreativeAsset                   `json:"creativeAssets"`
	CreativeFieldAssignments            []CreativeFieldAssignment         `json:"creativeFieldAssignments"`
	CustomKeyValues                     []string                          `json:"customKeyValues"`
	DynamicAssetSelection               *bool                             `json:"dynamicAssetSelection"`
	ExitCustomEvents                    []CreativeCustomEvent             `json:"exitCustomEvents"`
	FsCommand                           *FsCommand                        `json:"fsCommand"`
	HTMLCode                            *string                           `json:"htmlCode"`
	HTMLCodeLocked                      *bool                             `json:"htmlCodeLocked"`
	ID                                  *string                           `json:"id"`
	IDDimensionValue                    *DimensionValue                   `json:"idDimensionValue"`
	Kind                                *string                           `json:"kind"`
	LastModifiedInfo                    *LastModifiedInfo                 `json:"lastModifiedInfo"`
	LatestTraffickedCreativeID          *string                           `json:"latestTraffickedCreativeId"`
	MediaDescription                    *string                           `json:"mediaDescription"`
	MediaDuration                       *float32                          `json:"mediaDuration"`
	Name                                *string                           `json:"name"`
	ObaIcon                             *ObaIcon                          `json:"obaIcon"`
	OverrideCSS                         *string                           `json:"overrideCss"`
	ProgressOffset                      *VideoOffset                      `json:"progressOffset"`
	RedirectURL                         *string                           `json:"redirectUrl"`
	RenderingID                         *string                           `json:"renderingId"`
	RenderingIDDimensionValue           *DimensionValue                   `json:"renderingIdDimensionValue"`
	RequiredFlashPluginVersion          *string                           `json:"requiredFlashPluginVersion"`
	RequiredFlashVersion                *int32                            `json:"requiredFlashVersion"`
	Size                                *Size                             `json:"size"`
	SkipOffset                          *VideoOffset                      `json:"skipOffset"`
	Skippable                           *bool                             `json:"skippable"`
	SslCompliant                        *bool                             `json:"sslCompliant"`
	SslOverride                         *bool                             `json:"sslOverride"`
	StudioAdvertiserID                  *string                           `json:"studioAdvertiserId"`
	StudioCreativeID                    *string                           `json:"studioCreativeId"`
	StudioTraffickedCreativeID          *string                           `json:"studioTraffickedCreativeId"`
	SubaccountID                        *string                           `json:"subaccountId"`
	ThirdPartyBackupImageImpressionsURL *string                           `json:"thirdPartyBackupImageImpressionsUrl"`
	ThirdPartyRichMediaImpressionsURL   *string                           `json:"thirdPartyRichMediaImpressionsUrl"`
	ThirdPartyUrls                      []ThirdPartyTrackingURL           `json:"thirdPartyUrls"`
	TimerCustomEvents                   []CreativeCustomEvent             `json:"timerCustomEvents"`
	TotalFileSize                       *string                           `json:"totalFileSize"`
	Type                                *CreativeTypeEnum                 `json:"type"`
	UniversalAdID                       *UniversalAdID                    `json:"universalAdId"`
	Version                             *int32                            `json:"version"`
}
