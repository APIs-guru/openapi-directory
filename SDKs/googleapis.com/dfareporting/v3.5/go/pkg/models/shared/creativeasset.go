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
	ActionScript3         *bool                               `json:"actionScript3"`
	Active                *bool                               `json:"active"`
	AdditionalSizes       []Size                              `json:"additionalSizes"`
	Alignment             *CreativeAssetAlignmentEnum         `json:"alignment"`
	ArtworkType           *CreativeAssetArtworkTypeEnum       `json:"artworkType"`
	AssetIdentifier       *CreativeAssetID                    `json:"assetIdentifier"`
	AudioBitRate          *int32                              `json:"audioBitRate"`
	AudioSampleRate       *int32                              `json:"audioSampleRate"`
	BackupImageExit       *CreativeCustomEvent                `json:"backupImageExit"`
	BitRate               *int32                              `json:"bitRate"`
	ChildAssetType        *CreativeAssetChildAssetTypeEnum    `json:"childAssetType"`
	CollapsedSize         *Size                               `json:"collapsedSize"`
	CompanionCreativeIds  []string                            `json:"companionCreativeIds"`
	CustomStartTimeValue  *int32                              `json:"customStartTimeValue"`
	DetectedFeatures      []CreativeAssetDetectedFeaturesEnum `json:"detectedFeatures"`
	DisplayType           *CreativeAssetDisplayTypeEnum       `json:"displayType"`
	Duration              *int32                              `json:"duration"`
	DurationType          *CreativeAssetDurationTypeEnum      `json:"durationType"`
	ExpandedDimension     *Size                               `json:"expandedDimension"`
	FileSize              *string                             `json:"fileSize"`
	FlashVersion          *int32                              `json:"flashVersion"`
	FrameRate             *float32                            `json:"frameRate"`
	HideFlashObjects      *bool                               `json:"hideFlashObjects"`
	HideSelectionBoxes    *bool                               `json:"hideSelectionBoxes"`
	HorizontallyLocked    *bool                               `json:"horizontallyLocked"`
	ID                    *string                             `json:"id"`
	IDDimensionValue      *DimensionValue                     `json:"idDimensionValue"`
	MediaDuration         *float32                            `json:"mediaDuration"`
	MimeType              *string                             `json:"mimeType"`
	Offset                *OffsetPosition                     `json:"offset"`
	Orientation           *CreativeAssetOrientationEnum       `json:"orientation"`
	OriginalBackup        *bool                               `json:"originalBackup"`
	PoliteLoad            *bool                               `json:"politeLoad"`
	Position              *OffsetPosition                     `json:"position"`
	PositionLeftUnit      *CreativeAssetPositionLeftUnitEnum  `json:"positionLeftUnit"`
	PositionTopUnit       *CreativeAssetPositionTopUnitEnum   `json:"positionTopUnit"`
	ProgressiveServingURL *string                             `json:"progressiveServingUrl"`
	Pushdown              *bool                               `json:"pushdown"`
	PushdownDuration      *float32                            `json:"pushdownDuration"`
	Role                  *CreativeAssetRoleEnum              `json:"role"`
	Size                  *Size                               `json:"size"`
	SslCompliant          *bool                               `json:"sslCompliant"`
	StartTimeType         *CreativeAssetStartTimeTypeEnum     `json:"startTimeType"`
	StreamingServingURL   *string                             `json:"streamingServingUrl"`
	Transparency          *bool                               `json:"transparency"`
	VerticallyLocked      *bool                               `json:"verticallyLocked"`
	WindowMode            *CreativeAssetWindowModeEnum        `json:"windowMode"`
	ZIndex                *int32                              `json:"zIndex"`
	ZipFilename           *string                             `json:"zipFilename"`
	ZipFilesize           *string                             `json:"zipFilesize"`
}
