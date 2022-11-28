import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";
import { TargetWindow } from "./targetwindow";
import { ClickTag } from "./clicktag";
import { CreativeCustomEvent } from "./creativecustomevent";
import { CreativeAssetSelection } from "./creativeassetselection";
import { CreativeAsset } from "./creativeasset";
import { CreativeFieldAssignment } from "./creativefieldassignment";
import { FsCommand } from "./fscommand";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { VideoOffset } from "./videooffset";
import { ThirdPartyTrackingUrl } from "./thirdpartytrackingurl";
import { UniversalAdId } from "./universaladid";
export declare enum CreativeArtworkTypeEnum {
    ArtworkTypeFlash = "ARTWORK_TYPE_FLASH",
    ArtworkTypeHtml5 = "ARTWORK_TYPE_HTML5",
    ArtworkTypeMixed = "ARTWORK_TYPE_MIXED",
    ArtworkTypeImage = "ARTWORK_TYPE_IMAGE"
}
export declare enum CreativeAuthoringSourceEnum {
    CreativeAuthoringSourceDcm = "CREATIVE_AUTHORING_SOURCE_DCM",
    CreativeAuthoringSourceDbm = "CREATIVE_AUTHORING_SOURCE_DBM",
    CreativeAuthoringSourceStudio = "CREATIVE_AUTHORING_SOURCE_STUDIO",
    CreativeAuthoringSourceGwd = "CREATIVE_AUTHORING_SOURCE_GWD"
}
export declare enum CreativeAuthoringToolEnum {
    Ninja = "NINJA",
    Swiffy = "SWIFFY"
}
export declare enum CreativeBackupImageFeaturesEnum {
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
export declare enum CreativeCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
export declare enum CreativeTypeEnum {
    Image = "IMAGE",
    DisplayRedirect = "DISPLAY_REDIRECT",
    CustomDisplay = "CUSTOM_DISPLAY",
    InternalRedirect = "INTERNAL_REDIRECT",
    CustomDisplayInterstitial = "CUSTOM_DISPLAY_INTERSTITIAL",
    InterstitialInternalRedirect = "INTERSTITIAL_INTERNAL_REDIRECT",
    TrackingText = "TRACKING_TEXT",
    RichMediaDisplayBanner = "RICH_MEDIA_DISPLAY_BANNER",
    RichMediaInpageFloating = "RICH_MEDIA_INPAGE_FLOATING",
    RichMediaImExpand = "RICH_MEDIA_IM_EXPAND",
    RichMediaDisplayExpanding = "RICH_MEDIA_DISPLAY_EXPANDING",
    RichMediaDisplayInterstitial = "RICH_MEDIA_DISPLAY_INTERSTITIAL",
    RichMediaDisplayMultiFloatingInterstitial = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL",
    RichMediaMobileInApp = "RICH_MEDIA_MOBILE_IN_APP",
    FlashInpage = "FLASH_INPAGE",
    InstreamVideo = "INSTREAM_VIDEO",
    VpaidLinearVideo = "VPAID_LINEAR_VIDEO",
    VpaidNonLinearVideo = "VPAID_NON_LINEAR_VIDEO",
    InstreamVideoRedirect = "INSTREAM_VIDEO_REDIRECT",
    RichMediaPeelDown = "RICH_MEDIA_PEEL_DOWN",
    Html5Banner = "HTML5_BANNER",
    Display = "DISPLAY",
    DisplayImageGallery = "DISPLAY_IMAGE_GALLERY",
    BrandSafeDefaultInstreamVideo = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO",
    InstreamAudio = "INSTREAM_AUDIO"
}
/**
 * Contains properties of a Creative.
**/
export declare class Creative extends SpeakeasyBase {
    accountId?: string;
    active?: boolean;
    adParameters?: string;
    adTagKeys?: string[];
    additionalSizes?: Size[];
    advertiserId?: string;
    allowScriptAccess?: boolean;
    archived?: boolean;
    artworkType?: CreativeArtworkTypeEnum;
    authoringSource?: CreativeAuthoringSourceEnum;
    authoringTool?: CreativeAuthoringToolEnum;
    autoAdvanceImages?: boolean;
    backgroundColor?: string;
    backupImageClickThroughUrl?: CreativeClickThroughUrl;
    backupImageFeatures?: CreativeBackupImageFeaturesEnum[];
    backupImageReportingLabel?: string;
    backupImageTargetWindow?: TargetWindow;
    clickTags?: ClickTag[];
    commercialId?: string;
    companionCreatives?: string[];
    compatibility?: CreativeCompatibilityEnum[];
    convertFlashToHtml5?: boolean;
    counterCustomEvents?: CreativeCustomEvent[];
    creativeAssetSelection?: CreativeAssetSelection;
    creativeAssets?: CreativeAsset[];
    creativeFieldAssignments?: CreativeFieldAssignment[];
    customKeyValues?: string[];
    dynamicAssetSelection?: boolean;
    exitCustomEvents?: CreativeCustomEvent[];
    fsCommand?: FsCommand;
    htmlCode?: string;
    htmlCodeLocked?: boolean;
    id?: string;
    idDimensionValue?: DimensionValue;
    kind?: string;
    lastModifiedInfo?: LastModifiedInfo;
    latestTraffickedCreativeId?: string;
    mediaDescription?: string;
    mediaDuration?: number;
    name?: string;
    overrideCss?: string;
    progressOffset?: VideoOffset;
    redirectUrl?: string;
    renderingId?: string;
    renderingIdDimensionValue?: DimensionValue;
    requiredFlashPluginVersion?: string;
    requiredFlashVersion?: number;
    size?: Size;
    skipOffset?: VideoOffset;
    skippable?: boolean;
    sslCompliant?: boolean;
    sslOverride?: boolean;
    studioAdvertiserId?: string;
    studioCreativeId?: string;
    studioTraffickedCreativeId?: string;
    subaccountId?: string;
    thirdPartyBackupImageImpressionsUrl?: string;
    thirdPartyRichMediaImpressionsUrl?: string;
    thirdPartyUrls?: ThirdPartyTrackingUrl[];
    timerCustomEvents?: CreativeCustomEvent[];
    totalFileSize?: string;
    type?: CreativeTypeEnum;
    universalAdId?: UniversalAdId;
    version?: number;
}
