import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeAssetId } from "./creativeassetid";
import { ClickTag } from "./clicktag";
import { DimensionValue } from "./dimensionvalue";


export enum CreativeAssetMetadataDetectedFeaturesEnum {
    CssFontFace = "CSS_FONT_FACE",
    CssBackgroundSize = "CSS_BACKGROUND_SIZE",
    CssBorderImage = "CSS_BORDER_IMAGE",
    CssBorderRadius = "CSS_BORDER_RADIUS",
    CssBoxShadow = "CSS_BOX_SHADOW",
    CssFlexBox = "CSS_FLEX_BOX",
    CssHsla = "CSS_HSLA",
    CssMultipleBgs = "CSS_MULTIPLE_BGS",
    CssOpacity = "CSS_OPACITY",
    CssRgba = "CSS_RGBA",
    CssTextShadow = "CSS_TEXT_SHADOW",
    CssAnimations = "CSS_ANIMATIONS",
    CssColumns = "CSS_COLUMNS",
    CssGeneratedContent = "CSS_GENERATED_CONTENT",
    CssGradients = "CSS_GRADIENTS",
    CssReflections = "CSS_REFLECTIONS",
    CssTransforms = "CSS_TRANSFORMS",
    CssTransforms3D = "CSS_TRANSFORMS3D",
    CssTransitions = "CSS_TRANSITIONS",
    ApplicationCache = "APPLICATION_CACHE",
    Canvas = "CANVAS",
    CanvasText = "CANVAS_TEXT",
    DragAndDrop = "DRAG_AND_DROP",
    HashChange = "HASH_CHANGE",
    History = "HISTORY",
    Audio = "AUDIO",
    Video = "VIDEO",
    IndexedDb = "INDEXED_DB",
    InputAttrAutocomplete = "INPUT_ATTR_AUTOCOMPLETE",
    InputAttrAutofocus = "INPUT_ATTR_AUTOFOCUS",
    InputAttrList = "INPUT_ATTR_LIST",
    InputAttrPlaceholder = "INPUT_ATTR_PLACEHOLDER",
    InputAttrMax = "INPUT_ATTR_MAX",
    InputAttrMin = "INPUT_ATTR_MIN",
    InputAttrMultiple = "INPUT_ATTR_MULTIPLE",
    InputAttrPattern = "INPUT_ATTR_PATTERN",
    InputAttrRequired = "INPUT_ATTR_REQUIRED",
    InputAttrStep = "INPUT_ATTR_STEP",
    InputTypeSearch = "INPUT_TYPE_SEARCH",
    InputTypeTel = "INPUT_TYPE_TEL",
    InputTypeUrl = "INPUT_TYPE_URL",
    InputTypeEmail = "INPUT_TYPE_EMAIL",
    InputTypeDatetime = "INPUT_TYPE_DATETIME",
    InputTypeDate = "INPUT_TYPE_DATE",
    InputTypeMonth = "INPUT_TYPE_MONTH",
    InputTypeWeek = "INPUT_TYPE_WEEK",
    InputTypeTime = "INPUT_TYPE_TIME",
    InputTypeDatetimeLocal = "INPUT_TYPE_DATETIME_LOCAL",
    InputTypeNumber = "INPUT_TYPE_NUMBER",
    InputTypeRange = "INPUT_TYPE_RANGE",
    InputTypeColor = "INPUT_TYPE_COLOR",
    LocalStorage = "LOCAL_STORAGE",
    PostMessage = "POST_MESSAGE",
    SessionStorage = "SESSION_STORAGE",
    WebSockets = "WEB_SOCKETS",
    WebSqlDatabase = "WEB_SQL_DATABASE",
    WebWorkers = "WEB_WORKERS",
    GeoLocation = "GEO_LOCATION",
    InlineSvg = "INLINE_SVG",
    Smil = "SMIL",
    SvgHref = "SVG_HREF",
    SvgClipPaths = "SVG_CLIP_PATHS",
    Touch = "TOUCH",
    Webgl = "WEBGL",
    SvgFilters = "SVG_FILTERS",
    SvgFeImage = "SVG_FE_IMAGE"
}

export enum CreativeAssetMetadataWarnedValidationRulesEnum {
    ClickTagNonTopLevel = "CLICK_TAG_NON_TOP_LEVEL",
    ClickTagMissing = "CLICK_TAG_MISSING",
    ClickTagMoreThanOne = "CLICK_TAG_MORE_THAN_ONE",
    ClickTagInvalid = "CLICK_TAG_INVALID",
    OrphanedAsset = "ORPHANED_ASSET",
    PrimaryHtmlMissing = "PRIMARY_HTML_MISSING",
    ExternalFileReferenced = "EXTERNAL_FILE_REFERENCED",
    MraidReferenced = "MRAID_REFERENCED",
    AdmobReferenced = "ADMOB_REFERENCED",
    FileTypeInvalid = "FILE_TYPE_INVALID",
    ZipInvalid = "ZIP_INVALID",
    LinkedFileNotFound = "LINKED_FILE_NOT_FOUND",
    MaxFlashVersion11 = "MAX_FLASH_VERSION_11",
    NotSslCompliant = "NOT_SSL_COMPLIANT",
    FileDetailEmpty = "FILE_DETAIL_EMPTY",
    AssetInvalid = "ASSET_INVALID",
    GwdPropertiesInvalid = "GWD_PROPERTIES_INVALID",
    EnablerUnsupportedMethodDcm = "ENABLER_UNSUPPORTED_METHOD_DCM",
    AssetFormatUnsupportedDcm = "ASSET_FORMAT_UNSUPPORTED_DCM",
    ComponentUnsupportedDcm = "COMPONENT_UNSUPPORTED_DCM",
    Html5FeatureUnsupported = "HTML5_FEATURE_UNSUPPORTED",
    ClickTagInGwd = "CLICK_TAG_IN_GWD",
    ClickTagHardCoded = "CLICK_TAG_HARD_CODED",
    SvgInvalid = "SVG_INVALID",
    ClickTagInRichMedia = "CLICK_TAG_IN_RICH_MEDIA"
}


// CreativeAssetMetadata
/** 
 * CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.
**/
export class CreativeAssetMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetIdentifier" })
  assetIdentifier?: CreativeAssetId;

  @SpeakeasyMetadata({ data: "json, name=clickTags", elemType: ClickTag })
  clickTags?: ClickTag[];

  @SpeakeasyMetadata({ data: "json, name=detectedFeatures" })
  detectedFeatures?: CreativeAssetMetadataDetectedFeaturesEnum[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=warnedValidationRules" })
  warnedValidationRules?: CreativeAssetMetadataWarnedValidationRulesEnum[];
}
