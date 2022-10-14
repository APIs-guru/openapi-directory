package shared

type CreativeAssetAlignmentEnum string

const (
	CreativeAssetAlignmentEnumAlignmentTop    CreativeAssetAlignmentEnum = "ALIGNMENT_TOP"
	CreativeAssetAlignmentEnumAlignmentRight  CreativeAssetAlignmentEnum = "ALIGNMENT_RIGHT"
	CreativeAssetAlignmentEnumAlignmentBottom CreativeAssetAlignmentEnum = "ALIGNMENT_BOTTOM"
	CreativeAssetAlignmentEnumAlignmentLeft   CreativeAssetAlignmentEnum = "ALIGNMENT_LEFT"
)

type CreativeAssetArtworkTypeEnum string

const (
	CreativeAssetArtworkTypeEnumArtworkTypeFlash CreativeAssetArtworkTypeEnum = "ARTWORK_TYPE_FLASH"
	CreativeAssetArtworkTypeEnumArtworkTypeHtml5 CreativeAssetArtworkTypeEnum = "ARTWORK_TYPE_HTML5"
	CreativeAssetArtworkTypeEnumArtworkTypeMixed CreativeAssetArtworkTypeEnum = "ARTWORK_TYPE_MIXED"
	CreativeAssetArtworkTypeEnumArtworkTypeImage CreativeAssetArtworkTypeEnum = "ARTWORK_TYPE_IMAGE"
)

type CreativeAssetChildAssetTypeEnum string

const (
	CreativeAssetChildAssetTypeEnumChildAssetTypeFlash CreativeAssetChildAssetTypeEnum = "CHILD_ASSET_TYPE_FLASH"
	CreativeAssetChildAssetTypeEnumChildAssetTypeVideo CreativeAssetChildAssetTypeEnum = "CHILD_ASSET_TYPE_VIDEO"
	CreativeAssetChildAssetTypeEnumChildAssetTypeImage CreativeAssetChildAssetTypeEnum = "CHILD_ASSET_TYPE_IMAGE"
	CreativeAssetChildAssetTypeEnumChildAssetTypeData  CreativeAssetChildAssetTypeEnum = "CHILD_ASSET_TYPE_DATA"
)

type CreativeAssetDetectedFeaturesEnum string

const (
	CreativeAssetDetectedFeaturesEnumCSSFontFace            CreativeAssetDetectedFeaturesEnum = "CSS_FONT_FACE"
	CreativeAssetDetectedFeaturesEnumCSSBackgroundSize      CreativeAssetDetectedFeaturesEnum = "CSS_BACKGROUND_SIZE"
	CreativeAssetDetectedFeaturesEnumCSSBorderImage         CreativeAssetDetectedFeaturesEnum = "CSS_BORDER_IMAGE"
	CreativeAssetDetectedFeaturesEnumCSSBorderRadius        CreativeAssetDetectedFeaturesEnum = "CSS_BORDER_RADIUS"
	CreativeAssetDetectedFeaturesEnumCSSBoxShadow           CreativeAssetDetectedFeaturesEnum = "CSS_BOX_SHADOW"
	CreativeAssetDetectedFeaturesEnumCSSFlexBox             CreativeAssetDetectedFeaturesEnum = "CSS_FLEX_BOX"
	CreativeAssetDetectedFeaturesEnumCSSHsla                CreativeAssetDetectedFeaturesEnum = "CSS_HSLA"
	CreativeAssetDetectedFeaturesEnumCSSMultipleBgs         CreativeAssetDetectedFeaturesEnum = "CSS_MULTIPLE_BGS"
	CreativeAssetDetectedFeaturesEnumCSSOpacity             CreativeAssetDetectedFeaturesEnum = "CSS_OPACITY"
	CreativeAssetDetectedFeaturesEnumCSSRgba                CreativeAssetDetectedFeaturesEnum = "CSS_RGBA"
	CreativeAssetDetectedFeaturesEnumCSSTextShadow          CreativeAssetDetectedFeaturesEnum = "CSS_TEXT_SHADOW"
	CreativeAssetDetectedFeaturesEnumCSSAnimations          CreativeAssetDetectedFeaturesEnum = "CSS_ANIMATIONS"
	CreativeAssetDetectedFeaturesEnumCSSColumns             CreativeAssetDetectedFeaturesEnum = "CSS_COLUMNS"
	CreativeAssetDetectedFeaturesEnumCSSGeneratedContent    CreativeAssetDetectedFeaturesEnum = "CSS_GENERATED_CONTENT"
	CreativeAssetDetectedFeaturesEnumCSSGradients           CreativeAssetDetectedFeaturesEnum = "CSS_GRADIENTS"
	CreativeAssetDetectedFeaturesEnumCSSReflections         CreativeAssetDetectedFeaturesEnum = "CSS_REFLECTIONS"
	CreativeAssetDetectedFeaturesEnumCSSTransforms          CreativeAssetDetectedFeaturesEnum = "CSS_TRANSFORMS"
	CreativeAssetDetectedFeaturesEnumCSSTransforms3D        CreativeAssetDetectedFeaturesEnum = "CSS_TRANSFORMS3D"
	CreativeAssetDetectedFeaturesEnumCSSTransitions         CreativeAssetDetectedFeaturesEnum = "CSS_TRANSITIONS"
	CreativeAssetDetectedFeaturesEnumApplicationCache       CreativeAssetDetectedFeaturesEnum = "APPLICATION_CACHE"
	CreativeAssetDetectedFeaturesEnumCanvas                 CreativeAssetDetectedFeaturesEnum = "CANVAS"
	CreativeAssetDetectedFeaturesEnumCanvasText             CreativeAssetDetectedFeaturesEnum = "CANVAS_TEXT"
	CreativeAssetDetectedFeaturesEnumDragAndDrop            CreativeAssetDetectedFeaturesEnum = "DRAG_AND_DROP"
	CreativeAssetDetectedFeaturesEnumHashChange             CreativeAssetDetectedFeaturesEnum = "HASH_CHANGE"
	CreativeAssetDetectedFeaturesEnumHistory                CreativeAssetDetectedFeaturesEnum = "HISTORY"
	CreativeAssetDetectedFeaturesEnumAudio                  CreativeAssetDetectedFeaturesEnum = "AUDIO"
	CreativeAssetDetectedFeaturesEnumVideo                  CreativeAssetDetectedFeaturesEnum = "VIDEO"
	CreativeAssetDetectedFeaturesEnumIndexedDb              CreativeAssetDetectedFeaturesEnum = "INDEXED_DB"
	CreativeAssetDetectedFeaturesEnumInputAttrAutocomplete  CreativeAssetDetectedFeaturesEnum = "INPUT_ATTR_AUTOCOMPLETE"
	CreativeAssetDetectedFeaturesEnumInputAttrAutofocus     CreativeAssetDetectedFeaturesEnum = "INPUT_ATTR_AUTOFOCUS"
	CreativeAssetDetectedFeaturesEnumInputAttrList          CreativeAssetDetectedFeaturesEnum = "INPUT_ATTR_LIST"
	CreativeAssetDetectedFeaturesEnumInputAttrPlaceholder   CreativeAssetDetectedFeaturesEnum = "INPUT_ATTR_PLACEHOLDER"
	CreativeAssetDetectedFeaturesEnumInputAttrMax           CreativeAssetDetectedFeaturesEnum = "INPUT_ATTR_MAX"
	CreativeAssetDetectedFeaturesEnumInputAttrMin           CreativeAssetDetectedFeaturesEnum = "INPUT_ATTR_MIN"
	CreativeAssetDetectedFeaturesEnumInputAttrMultiple      CreativeAssetDetectedFeaturesEnum = "INPUT_ATTR_MULTIPLE"
	CreativeAssetDetectedFeaturesEnumInputAttrPattern       CreativeAssetDetectedFeaturesEnum = "INPUT_ATTR_PATTERN"
	CreativeAssetDetectedFeaturesEnumInputAttrRequired      CreativeAssetDetectedFeaturesEnum = "INPUT_ATTR_REQUIRED"
	CreativeAssetDetectedFeaturesEnumInputAttrStep          CreativeAssetDetectedFeaturesEnum = "INPUT_ATTR_STEP"
	CreativeAssetDetectedFeaturesEnumInputTypeSearch        CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_SEARCH"
	CreativeAssetDetectedFeaturesEnumInputTypeTel           CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_TEL"
	CreativeAssetDetectedFeaturesEnumInputTypeURL           CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_URL"
	CreativeAssetDetectedFeaturesEnumInputTypeEmail         CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_EMAIL"
	CreativeAssetDetectedFeaturesEnumInputTypeDatetime      CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_DATETIME"
	CreativeAssetDetectedFeaturesEnumInputTypeDate          CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_DATE"
	CreativeAssetDetectedFeaturesEnumInputTypeMonth         CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_MONTH"
	CreativeAssetDetectedFeaturesEnumInputTypeWeek          CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_WEEK"
	CreativeAssetDetectedFeaturesEnumInputTypeTime          CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_TIME"
	CreativeAssetDetectedFeaturesEnumInputTypeDatetimeLocal CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_DATETIME_LOCAL"
	CreativeAssetDetectedFeaturesEnumInputTypeNumber        CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_NUMBER"
	CreativeAssetDetectedFeaturesEnumInputTypeRange         CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_RANGE"
	CreativeAssetDetectedFeaturesEnumInputTypeColor         CreativeAssetDetectedFeaturesEnum = "INPUT_TYPE_COLOR"
	CreativeAssetDetectedFeaturesEnumLocalStorage           CreativeAssetDetectedFeaturesEnum = "LOCAL_STORAGE"
	CreativeAssetDetectedFeaturesEnumPostMessage            CreativeAssetDetectedFeaturesEnum = "POST_MESSAGE"
	CreativeAssetDetectedFeaturesEnumSessionStorage         CreativeAssetDetectedFeaturesEnum = "SESSION_STORAGE"
	CreativeAssetDetectedFeaturesEnumWebSockets             CreativeAssetDetectedFeaturesEnum = "WEB_SOCKETS"
	CreativeAssetDetectedFeaturesEnumWebSQLDatabase         CreativeAssetDetectedFeaturesEnum = "WEB_SQL_DATABASE"
	CreativeAssetDetectedFeaturesEnumWebWorkers             CreativeAssetDetectedFeaturesEnum = "WEB_WORKERS"
	CreativeAssetDetectedFeaturesEnumGeoLocation            CreativeAssetDetectedFeaturesEnum = "GEO_LOCATION"
	CreativeAssetDetectedFeaturesEnumInlineSvg              CreativeAssetDetectedFeaturesEnum = "INLINE_SVG"
	CreativeAssetDetectedFeaturesEnumSmil                   CreativeAssetDetectedFeaturesEnum = "SMIL"
	CreativeAssetDetectedFeaturesEnumSvgHref                CreativeAssetDetectedFeaturesEnum = "SVG_HREF"
	CreativeAssetDetectedFeaturesEnumSvgClipPaths           CreativeAssetDetectedFeaturesEnum = "SVG_CLIP_PATHS"
	CreativeAssetDetectedFeaturesEnumTouch                  CreativeAssetDetectedFeaturesEnum = "TOUCH"
	CreativeAssetDetectedFeaturesEnumWebgl                  CreativeAssetDetectedFeaturesEnum = "WEBGL"
	CreativeAssetDetectedFeaturesEnumSvgFilters             CreativeAssetDetectedFeaturesEnum = "SVG_FILTERS"
	CreativeAssetDetectedFeaturesEnumSvgFeImage             CreativeAssetDetectedFeaturesEnum = "SVG_FE_IMAGE"
)

type CreativeAssetDisplayTypeEnum string

const (
	CreativeAssetDisplayTypeEnumAssetDisplayTypeInpage                CreativeAssetDisplayTypeEnum = "ASSET_DISPLAY_TYPE_INPAGE"
	CreativeAssetDisplayTypeEnumAssetDisplayTypeFloating              CreativeAssetDisplayTypeEnum = "ASSET_DISPLAY_TYPE_FLOATING"
	CreativeAssetDisplayTypeEnumAssetDisplayTypeOverlay               CreativeAssetDisplayTypeEnum = "ASSET_DISPLAY_TYPE_OVERLAY"
	CreativeAssetDisplayTypeEnumAssetDisplayTypeExpanding             CreativeAssetDisplayTypeEnum = "ASSET_DISPLAY_TYPE_EXPANDING"
	CreativeAssetDisplayTypeEnumAssetDisplayTypeFlashInFlash          CreativeAssetDisplayTypeEnum = "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH"
	CreativeAssetDisplayTypeEnumAssetDisplayTypeFlashInFlashExpanding CreativeAssetDisplayTypeEnum = "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING"
	CreativeAssetDisplayTypeEnumAssetDisplayTypePeelDown              CreativeAssetDisplayTypeEnum = "ASSET_DISPLAY_TYPE_PEEL_DOWN"
	CreativeAssetDisplayTypeEnumAssetDisplayTypeVpaidLinear           CreativeAssetDisplayTypeEnum = "ASSET_DISPLAY_TYPE_VPAID_LINEAR"
	CreativeAssetDisplayTypeEnumAssetDisplayTypeVpaidNonLinear        CreativeAssetDisplayTypeEnum = "ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR"
	CreativeAssetDisplayTypeEnumAssetDisplayTypeBackdrop              CreativeAssetDisplayTypeEnum = "ASSET_DISPLAY_TYPE_BACKDROP"
)

type CreativeAssetDurationTypeEnum string

const (
	CreativeAssetDurationTypeEnumAssetDurationTypeAuto   CreativeAssetDurationTypeEnum = "ASSET_DURATION_TYPE_AUTO"
	CreativeAssetDurationTypeEnumAssetDurationTypeNone   CreativeAssetDurationTypeEnum = "ASSET_DURATION_TYPE_NONE"
	CreativeAssetDurationTypeEnumAssetDurationTypeCustom CreativeAssetDurationTypeEnum = "ASSET_DURATION_TYPE_CUSTOM"
)

type CreativeAssetOrientationEnum string

const (
	CreativeAssetOrientationEnumLandscape CreativeAssetOrientationEnum = "LANDSCAPE"
	CreativeAssetOrientationEnumPortrait  CreativeAssetOrientationEnum = "PORTRAIT"
	CreativeAssetOrientationEnumSquare    CreativeAssetOrientationEnum = "SQUARE"
)

type CreativeAssetPositionLeftUnitEnum string

const (
	CreativeAssetPositionLeftUnitEnumOffsetUnitPixel           CreativeAssetPositionLeftUnitEnum = "OFFSET_UNIT_PIXEL"
	CreativeAssetPositionLeftUnitEnumOffsetUnitPercent         CreativeAssetPositionLeftUnitEnum = "OFFSET_UNIT_PERCENT"
	CreativeAssetPositionLeftUnitEnumOffsetUnitPixelFromCenter CreativeAssetPositionLeftUnitEnum = "OFFSET_UNIT_PIXEL_FROM_CENTER"
)

type CreativeAssetPositionTopUnitEnum string

const (
	CreativeAssetPositionTopUnitEnumOffsetUnitPixel           CreativeAssetPositionTopUnitEnum = "OFFSET_UNIT_PIXEL"
	CreativeAssetPositionTopUnitEnumOffsetUnitPercent         CreativeAssetPositionTopUnitEnum = "OFFSET_UNIT_PERCENT"
	CreativeAssetPositionTopUnitEnumOffsetUnitPixelFromCenter CreativeAssetPositionTopUnitEnum = "OFFSET_UNIT_PIXEL_FROM_CENTER"
)

type CreativeAssetRoleEnum string

const (
	CreativeAssetRoleEnumPrimary         CreativeAssetRoleEnum = "PRIMARY"
	CreativeAssetRoleEnumBackupImage     CreativeAssetRoleEnum = "BACKUP_IMAGE"
	CreativeAssetRoleEnumAdditionalImage CreativeAssetRoleEnum = "ADDITIONAL_IMAGE"
	CreativeAssetRoleEnumAdditionalFlash CreativeAssetRoleEnum = "ADDITIONAL_FLASH"
	CreativeAssetRoleEnumParentVideo     CreativeAssetRoleEnum = "PARENT_VIDEO"
	CreativeAssetRoleEnumTranscodedVideo CreativeAssetRoleEnum = "TRANSCODED_VIDEO"
	CreativeAssetRoleEnumOther           CreativeAssetRoleEnum = "OTHER"
	CreativeAssetRoleEnumAlternateVideo  CreativeAssetRoleEnum = "ALTERNATE_VIDEO"
	CreativeAssetRoleEnumParentAudio     CreativeAssetRoleEnum = "PARENT_AUDIO"
	CreativeAssetRoleEnumTranscodedAudio CreativeAssetRoleEnum = "TRANSCODED_AUDIO"
)

type CreativeAssetStartTimeTypeEnum string

const (
	CreativeAssetStartTimeTypeEnumAssetStartTimeTypeNone   CreativeAssetStartTimeTypeEnum = "ASSET_START_TIME_TYPE_NONE"
	CreativeAssetStartTimeTypeEnumAssetStartTimeTypeCustom CreativeAssetStartTimeTypeEnum = "ASSET_START_TIME_TYPE_CUSTOM"
)

type CreativeAssetWindowModeEnum string

const (
	CreativeAssetWindowModeEnumOpaque      CreativeAssetWindowModeEnum = "OPAQUE"
	CreativeAssetWindowModeEnumWindow      CreativeAssetWindowModeEnum = "WINDOW"
	CreativeAssetWindowModeEnumTransparent CreativeAssetWindowModeEnum = "TRANSPARENT"
)

type CreativeAsset struct {
	ActionScript3         *bool                               `json:"actionScript3,omitempty"`
	Active                *bool                               `json:"active,omitempty"`
	AdditionalSizes       []Size                              `json:"additionalSizes,omitempty"`
	Alignment             *CreativeAssetAlignmentEnum         `json:"alignment,omitempty"`
	ArtworkType           *CreativeAssetArtworkTypeEnum       `json:"artworkType,omitempty"`
	AssetIdentifier       *CreativeAssetID                    `json:"assetIdentifier,omitempty"`
	AudioBitRate          *int32                              `json:"audioBitRate,omitempty"`
	AudioSampleRate       *int32                              `json:"audioSampleRate,omitempty"`
	BackupImageExit       *CreativeCustomEvent                `json:"backupImageExit,omitempty"`
	BitRate               *int32                              `json:"bitRate,omitempty"`
	ChildAssetType        *CreativeAssetChildAssetTypeEnum    `json:"childAssetType,omitempty"`
	CollapsedSize         *Size                               `json:"collapsedSize,omitempty"`
	CompanionCreativeIds  []string                            `json:"companionCreativeIds,omitempty"`
	CustomStartTimeValue  *int32                              `json:"customStartTimeValue,omitempty"`
	DetectedFeatures      []CreativeAssetDetectedFeaturesEnum `json:"detectedFeatures,omitempty"`
	DisplayType           *CreativeAssetDisplayTypeEnum       `json:"displayType,omitempty"`
	Duration              *int32                              `json:"duration,omitempty"`
	DurationType          *CreativeAssetDurationTypeEnum      `json:"durationType,omitempty"`
	ExpandedDimension     *Size                               `json:"expandedDimension,omitempty"`
	FileSize              *string                             `json:"fileSize,omitempty"`
	FlashVersion          *int32                              `json:"flashVersion,omitempty"`
	FrameRate             *float32                            `json:"frameRate,omitempty"`
	HideFlashObjects      *bool                               `json:"hideFlashObjects,omitempty"`
	HideSelectionBoxes    *bool                               `json:"hideSelectionBoxes,omitempty"`
	HorizontallyLocked    *bool                               `json:"horizontallyLocked,omitempty"`
	ID                    *string                             `json:"id,omitempty"`
	IDDimensionValue      *DimensionValue                     `json:"idDimensionValue,omitempty"`
	MediaDuration         *float32                            `json:"mediaDuration,omitempty"`
	MimeType              *string                             `json:"mimeType,omitempty"`
	Offset                *OffsetPosition                     `json:"offset,omitempty"`
	Orientation           *CreativeAssetOrientationEnum       `json:"orientation,omitempty"`
	OriginalBackup        *bool                               `json:"originalBackup,omitempty"`
	PoliteLoad            *bool                               `json:"politeLoad,omitempty"`
	Position              *OffsetPosition                     `json:"position,omitempty"`
	PositionLeftUnit      *CreativeAssetPositionLeftUnitEnum  `json:"positionLeftUnit,omitempty"`
	PositionTopUnit       *CreativeAssetPositionTopUnitEnum   `json:"positionTopUnit,omitempty"`
	ProgressiveServingURL *string                             `json:"progressiveServingUrl,omitempty"`
	Pushdown              *bool                               `json:"pushdown,omitempty"`
	PushdownDuration      *float32                            `json:"pushdownDuration,omitempty"`
	Role                  *CreativeAssetRoleEnum              `json:"role,omitempty"`
	Size                  *Size                               `json:"size,omitempty"`
	SslCompliant          *bool                               `json:"sslCompliant,omitempty"`
	StartTimeType         *CreativeAssetStartTimeTypeEnum     `json:"startTimeType,omitempty"`
	StreamingServingURL   *string                             `json:"streamingServingUrl,omitempty"`
	Transparency          *bool                               `json:"transparency,omitempty"`
	VerticallyLocked      *bool                               `json:"verticallyLocked,omitempty"`
	WindowMode            *CreativeAssetWindowModeEnum        `json:"windowMode,omitempty"`
	ZIndex                *int32                              `json:"zIndex,omitempty"`
	ZipFilename           *string                             `json:"zipFilename,omitempty"`
	ZipFilesize           *string                             `json:"zipFilesize,omitempty"`
}
