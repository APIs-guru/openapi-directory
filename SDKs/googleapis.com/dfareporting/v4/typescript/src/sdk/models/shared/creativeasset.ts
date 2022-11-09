import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Size } from "./size";
import { CreativeAssetId } from "./creativeassetid";
import { CreativeCustomEvent } from "./creativecustomevent";
import { Size } from "./size";
import { Size } from "./size";
import { DimensionValue } from "./dimensionvalue";
import { OffsetPosition } from "./offsetposition";
import { OffsetPosition } from "./offsetposition";
import { Size } from "./size";

export enum CreativeAssetAlignmentEnum {
    AlignmentTop = "ALIGNMENT_TOP"
,    AlignmentRight = "ALIGNMENT_RIGHT"
,    AlignmentBottom = "ALIGNMENT_BOTTOM"
,    AlignmentLeft = "ALIGNMENT_LEFT"
}

export enum CreativeAssetArtworkTypeEnum {
    ArtworkTypeFlash = "ARTWORK_TYPE_FLASH"
,    ArtworkTypeHtml5 = "ARTWORK_TYPE_HTML5"
,    ArtworkTypeMixed = "ARTWORK_TYPE_MIXED"
,    ArtworkTypeImage = "ARTWORK_TYPE_IMAGE"
}

export enum CreativeAssetChildAssetTypeEnum {
    ChildAssetTypeFlash = "CHILD_ASSET_TYPE_FLASH"
,    ChildAssetTypeVideo = "CHILD_ASSET_TYPE_VIDEO"
,    ChildAssetTypeImage = "CHILD_ASSET_TYPE_IMAGE"
,    ChildAssetTypeData = "CHILD_ASSET_TYPE_DATA"
}

export enum CreativeAssetDetectedFeaturesEnum {
    CssFontFace = "CSS_FONT_FACE"
,    CssBackgroundSize = "CSS_BACKGROUND_SIZE"
,    CssBorderImage = "CSS_BORDER_IMAGE"
,    CssBorderRadius = "CSS_BORDER_RADIUS"
,    CssBoxShadow = "CSS_BOX_SHADOW"
,    CssFlexBox = "CSS_FLEX_BOX"
,    CssHsla = "CSS_HSLA"
,    CssMultipleBgs = "CSS_MULTIPLE_BGS"
,    CssOpacity = "CSS_OPACITY"
,    CssRgba = "CSS_RGBA"
,    CssTextShadow = "CSS_TEXT_SHADOW"
,    CssAnimations = "CSS_ANIMATIONS"
,    CssColumns = "CSS_COLUMNS"
,    CssGeneratedContent = "CSS_GENERATED_CONTENT"
,    CssGradients = "CSS_GRADIENTS"
,    CssReflections = "CSS_REFLECTIONS"
,    CssTransforms = "CSS_TRANSFORMS"
,    CssTransforms3D = "CSS_TRANSFORMS3D"
,    CssTransitions = "CSS_TRANSITIONS"
,    ApplicationCache = "APPLICATION_CACHE"
,    Canvas = "CANVAS"
,    CanvasText = "CANVAS_TEXT"
,    DragAndDrop = "DRAG_AND_DROP"
,    HashChange = "HASH_CHANGE"
,    History = "HISTORY"
,    Audio = "AUDIO"
,    Video = "VIDEO"
,    IndexedDb = "INDEXED_DB"
,    InputAttrAutocomplete = "INPUT_ATTR_AUTOCOMPLETE"
,    InputAttrAutofocus = "INPUT_ATTR_AUTOFOCUS"
,    InputAttrList = "INPUT_ATTR_LIST"
,    InputAttrPlaceholder = "INPUT_ATTR_PLACEHOLDER"
,    InputAttrMax = "INPUT_ATTR_MAX"
,    InputAttrMin = "INPUT_ATTR_MIN"
,    InputAttrMultiple = "INPUT_ATTR_MULTIPLE"
,    InputAttrPattern = "INPUT_ATTR_PATTERN"
,    InputAttrRequired = "INPUT_ATTR_REQUIRED"
,    InputAttrStep = "INPUT_ATTR_STEP"
,    InputTypeSearch = "INPUT_TYPE_SEARCH"
,    InputTypeTel = "INPUT_TYPE_TEL"
,    InputTypeUrl = "INPUT_TYPE_URL"
,    InputTypeEmail = "INPUT_TYPE_EMAIL"
,    InputTypeDatetime = "INPUT_TYPE_DATETIME"
,    InputTypeDate = "INPUT_TYPE_DATE"
,    InputTypeMonth = "INPUT_TYPE_MONTH"
,    InputTypeWeek = "INPUT_TYPE_WEEK"
,    InputTypeTime = "INPUT_TYPE_TIME"
,    InputTypeDatetimeLocal = "INPUT_TYPE_DATETIME_LOCAL"
,    InputTypeNumber = "INPUT_TYPE_NUMBER"
,    InputTypeRange = "INPUT_TYPE_RANGE"
,    InputTypeColor = "INPUT_TYPE_COLOR"
,    LocalStorage = "LOCAL_STORAGE"
,    PostMessage = "POST_MESSAGE"
,    SessionStorage = "SESSION_STORAGE"
,    WebSockets = "WEB_SOCKETS"
,    WebSqlDatabase = "WEB_SQL_DATABASE"
,    WebWorkers = "WEB_WORKERS"
,    GeoLocation = "GEO_LOCATION"
,    InlineSvg = "INLINE_SVG"
,    Smil = "SMIL"
,    SvgHref = "SVG_HREF"
,    SvgClipPaths = "SVG_CLIP_PATHS"
,    Touch = "TOUCH"
,    Webgl = "WEBGL"
,    SvgFilters = "SVG_FILTERS"
,    SvgFeImage = "SVG_FE_IMAGE"
}

export enum CreativeAssetDisplayTypeEnum {
    AssetDisplayTypeInpage = "ASSET_DISPLAY_TYPE_INPAGE"
,    AssetDisplayTypeFloating = "ASSET_DISPLAY_TYPE_FLOATING"
,    AssetDisplayTypeOverlay = "ASSET_DISPLAY_TYPE_OVERLAY"
,    AssetDisplayTypeExpanding = "ASSET_DISPLAY_TYPE_EXPANDING"
,    AssetDisplayTypeFlashInFlash = "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH"
,    AssetDisplayTypeFlashInFlashExpanding = "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING"
,    AssetDisplayTypePeelDown = "ASSET_DISPLAY_TYPE_PEEL_DOWN"
,    AssetDisplayTypeVpaidLinear = "ASSET_DISPLAY_TYPE_VPAID_LINEAR"
,    AssetDisplayTypeVpaidNonLinear = "ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR"
,    AssetDisplayTypeBackdrop = "ASSET_DISPLAY_TYPE_BACKDROP"
}

export enum CreativeAssetDurationTypeEnum {
    AssetDurationTypeAuto = "ASSET_DURATION_TYPE_AUTO"
,    AssetDurationTypeNone = "ASSET_DURATION_TYPE_NONE"
,    AssetDurationTypeCustom = "ASSET_DURATION_TYPE_CUSTOM"
}

export enum CreativeAssetOrientationEnum {
    Landscape = "LANDSCAPE"
,    Portrait = "PORTRAIT"
,    Square = "SQUARE"
}

export enum CreativeAssetPositionLeftUnitEnum {
    OffsetUnitPixel = "OFFSET_UNIT_PIXEL"
,    OffsetUnitPercent = "OFFSET_UNIT_PERCENT"
,    OffsetUnitPixelFromCenter = "OFFSET_UNIT_PIXEL_FROM_CENTER"
}

export enum CreativeAssetPositionTopUnitEnum {
    OffsetUnitPixel = "OFFSET_UNIT_PIXEL"
,    OffsetUnitPercent = "OFFSET_UNIT_PERCENT"
,    OffsetUnitPixelFromCenter = "OFFSET_UNIT_PIXEL_FROM_CENTER"
}

export enum CreativeAssetRoleEnum {
    Primary = "PRIMARY"
,    BackupImage = "BACKUP_IMAGE"
,    AdditionalImage = "ADDITIONAL_IMAGE"
,    AdditionalFlash = "ADDITIONAL_FLASH"
,    ParentVideo = "PARENT_VIDEO"
,    TranscodedVideo = "TRANSCODED_VIDEO"
,    Other = "OTHER"
,    AlternateVideo = "ALTERNATE_VIDEO"
,    ParentAudio = "PARENT_AUDIO"
,    TranscodedAudio = "TRANSCODED_AUDIO"
}

export enum CreativeAssetStartTimeTypeEnum {
    AssetStartTimeTypeNone = "ASSET_START_TIME_TYPE_NONE"
,    AssetStartTimeTypeCustom = "ASSET_START_TIME_TYPE_CUSTOM"
}

export enum CreativeAssetWindowModeEnum {
    Opaque = "OPAQUE"
,    Window = "WINDOW"
,    Transparent = "TRANSPARENT"
}


// CreativeAsset
/** 
 * Creative Asset.
**/
export class CreativeAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionScript3" })
  actionScript3?: boolean;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=additionalSizes", elemType: shared.Size })
  additionalSizes?: Size[];

  @Metadata({ data: "json, name=alignment" })
  alignment?: CreativeAssetAlignmentEnum;

  @Metadata({ data: "json, name=artworkType" })
  artworkType?: CreativeAssetArtworkTypeEnum;

  @Metadata({ data: "json, name=assetIdentifier" })
  assetIdentifier?: CreativeAssetId;

  @Metadata({ data: "json, name=audioBitRate" })
  audioBitRate?: number;

  @Metadata({ data: "json, name=audioSampleRate" })
  audioSampleRate?: number;

  @Metadata({ data: "json, name=backupImageExit" })
  backupImageExit?: CreativeCustomEvent;

  @Metadata({ data: "json, name=bitRate" })
  bitRate?: number;

  @Metadata({ data: "json, name=childAssetType" })
  childAssetType?: CreativeAssetChildAssetTypeEnum;

  @Metadata({ data: "json, name=collapsedSize" })
  collapsedSize?: Size;

  @Metadata({ data: "json, name=companionCreativeIds" })
  companionCreativeIds?: string[];

  @Metadata({ data: "json, name=customStartTimeValue" })
  customStartTimeValue?: number;

  @Metadata({ data: "json, name=detectedFeatures" })
  detectedFeatures?: CreativeAssetDetectedFeaturesEnum[];

  @Metadata({ data: "json, name=displayType" })
  displayType?: CreativeAssetDisplayTypeEnum;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=durationType" })
  durationType?: CreativeAssetDurationTypeEnum;

  @Metadata({ data: "json, name=expandedDimension" })
  expandedDimension?: Size;

  @Metadata({ data: "json, name=fileSize" })
  fileSize?: string;

  @Metadata({ data: "json, name=flashVersion" })
  flashVersion?: number;

  @Metadata({ data: "json, name=frameRate" })
  frameRate?: number;

  @Metadata({ data: "json, name=hideFlashObjects" })
  hideFlashObjects?: boolean;

  @Metadata({ data: "json, name=hideSelectionBoxes" })
  hideSelectionBoxes?: boolean;

  @Metadata({ data: "json, name=horizontallyLocked" })
  horizontallyLocked?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=mediaDuration" })
  mediaDuration?: number;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: OffsetPosition;

  @Metadata({ data: "json, name=orientation" })
  orientation?: CreativeAssetOrientationEnum;

  @Metadata({ data: "json, name=originalBackup" })
  originalBackup?: boolean;

  @Metadata({ data: "json, name=politeLoad" })
  politeLoad?: boolean;

  @Metadata({ data: "json, name=position" })
  position?: OffsetPosition;

  @Metadata({ data: "json, name=positionLeftUnit" })
  positionLeftUnit?: CreativeAssetPositionLeftUnitEnum;

  @Metadata({ data: "json, name=positionTopUnit" })
  positionTopUnit?: CreativeAssetPositionTopUnitEnum;

  @Metadata({ data: "json, name=progressiveServingUrl" })
  progressiveServingUrl?: string;

  @Metadata({ data: "json, name=pushdown" })
  pushdown?: boolean;

  @Metadata({ data: "json, name=pushdownDuration" })
  pushdownDuration?: number;

  @Metadata({ data: "json, name=role" })
  role?: CreativeAssetRoleEnum;

  @Metadata({ data: "json, name=size" })
  size?: Size;

  @Metadata({ data: "json, name=sslCompliant" })
  sslCompliant?: boolean;

  @Metadata({ data: "json, name=startTimeType" })
  startTimeType?: CreativeAssetStartTimeTypeEnum;

  @Metadata({ data: "json, name=streamingServingUrl" })
  streamingServingUrl?: string;

  @Metadata({ data: "json, name=transparency" })
  transparency?: boolean;

  @Metadata({ data: "json, name=verticallyLocked" })
  verticallyLocked?: boolean;

  @Metadata({ data: "json, name=windowMode" })
  windowMode?: CreativeAssetWindowModeEnum;

  @Metadata({ data: "json, name=zIndex" })
  zIndex?: number;

  @Metadata({ data: "json, name=zipFilename" })
  zipFilename?: string;

  @Metadata({ data: "json, name=zipFilesize" })
  zipFilesize?: string;
}
