import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
import { ObaIcon } from "./obaicon";
import { VideoOffset } from "./videooffset";
import { ThirdPartyTrackingUrl } from "./thirdpartytrackingurl";
import { UniversalAdId } from "./universaladid";


export enum CreativeArtworkTypeEnum {
    ArtworkTypeFlash = "ARTWORK_TYPE_FLASH",
    ArtworkTypeHtml5 = "ARTWORK_TYPE_HTML5",
    ArtworkTypeMixed = "ARTWORK_TYPE_MIXED",
    ArtworkTypeImage = "ARTWORK_TYPE_IMAGE"
}

export enum CreativeAuthoringSourceEnum {
    CreativeAuthoringSourceDcm = "CREATIVE_AUTHORING_SOURCE_DCM",
    CreativeAuthoringSourceDbm = "CREATIVE_AUTHORING_SOURCE_DBM",
    CreativeAuthoringSourceStudio = "CREATIVE_AUTHORING_SOURCE_STUDIO",
    CreativeAuthoringSourceGwd = "CREATIVE_AUTHORING_SOURCE_GWD"
}

export enum CreativeAuthoringToolEnum {
    Ninja = "NINJA",
    Swiffy = "SWIFFY"
}

export enum CreativeBackupImageFeaturesEnum {
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

export enum CreativeCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum CreativeTypeEnum {
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


// Creative
/** 
 * Contains properties of a Creative.
**/
export class Creative extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=adParameters" })
  adParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=adTagKeys" })
  adTagKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalSizes", elemType: Size })
  additionalSizes?: Size[];

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=allowScriptAccess" })
  allowScriptAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=artworkType" })
  artworkType?: CreativeArtworkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=authoringSource" })
  authoringSource?: CreativeAuthoringSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=authoringTool" })
  authoringTool?: CreativeAuthoringToolEnum;

  @SpeakeasyMetadata({ data: "json, name=autoAdvanceImages" })
  autoAdvanceImages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=backupImageClickThroughUrl" })
  backupImageClickThroughUrl?: CreativeClickThroughUrl;

  @SpeakeasyMetadata({ data: "json, name=backupImageFeatures" })
  backupImageFeatures?: CreativeBackupImageFeaturesEnum[];

  @SpeakeasyMetadata({ data: "json, name=backupImageReportingLabel" })
  backupImageReportingLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=backupImageTargetWindow" })
  backupImageTargetWindow?: TargetWindow;

  @SpeakeasyMetadata({ data: "json, name=clickTags", elemType: ClickTag })
  clickTags?: ClickTag[];

  @SpeakeasyMetadata({ data: "json, name=commercialId" })
  commercialId?: string;

  @SpeakeasyMetadata({ data: "json, name=companionCreatives" })
  companionCreatives?: string[];

  @SpeakeasyMetadata({ data: "json, name=compatibility" })
  compatibility?: CreativeCompatibilityEnum[];

  @SpeakeasyMetadata({ data: "json, name=convertFlashToHtml5" })
  convertFlashToHtml5?: boolean;

  @SpeakeasyMetadata({ data: "json, name=counterCustomEvents", elemType: CreativeCustomEvent })
  counterCustomEvents?: CreativeCustomEvent[];

  @SpeakeasyMetadata({ data: "json, name=creativeAssetSelection" })
  creativeAssetSelection?: CreativeAssetSelection;

  @SpeakeasyMetadata({ data: "json, name=creativeAssets", elemType: CreativeAsset })
  creativeAssets?: CreativeAsset[];

  @SpeakeasyMetadata({ data: "json, name=creativeFieldAssignments", elemType: CreativeFieldAssignment })
  creativeFieldAssignments?: CreativeFieldAssignment[];

  @SpeakeasyMetadata({ data: "json, name=customKeyValues" })
  customKeyValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=dynamicAssetSelection" })
  dynamicAssetSelection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exitCustomEvents", elemType: CreativeCustomEvent })
  exitCustomEvents?: CreativeCustomEvent[];

  @SpeakeasyMetadata({ data: "json, name=fsCommand" })
  fsCommand?: FsCommand;

  @SpeakeasyMetadata({ data: "json, name=htmlCode" })
  htmlCode?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlCodeLocked" })
  htmlCodeLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=latestTraffickedCreativeId" })
  latestTraffickedCreativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaDescription" })
  mediaDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaDuration" })
  mediaDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=obaIcon" })
  obaIcon?: ObaIcon;

  @SpeakeasyMetadata({ data: "json, name=overrideCss" })
  overrideCss?: string;

  @SpeakeasyMetadata({ data: "json, name=progressOffset" })
  progressOffset?: VideoOffset;

  @SpeakeasyMetadata({ data: "json, name=redirectUrl" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=renderingId" })
  renderingId?: string;

  @SpeakeasyMetadata({ data: "json, name=renderingIdDimensionValue" })
  renderingIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=requiredFlashPluginVersion" })
  requiredFlashPluginVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=requiredFlashVersion" })
  requiredFlashVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Size;

  @SpeakeasyMetadata({ data: "json, name=skipOffset" })
  skipOffset?: VideoOffset;

  @SpeakeasyMetadata({ data: "json, name=skippable" })
  skippable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sslCompliant" })
  sslCompliant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sslOverride" })
  sslOverride?: boolean;

  @SpeakeasyMetadata({ data: "json, name=studioAdvertiserId" })
  studioAdvertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=studioCreativeId" })
  studioCreativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=studioTraffickedCreativeId" })
  studioTraffickedCreativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyBackupImageImpressionsUrl" })
  thirdPartyBackupImageImpressionsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyRichMediaImpressionsUrl" })
  thirdPartyRichMediaImpressionsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyUrls", elemType: ThirdPartyTrackingUrl })
  thirdPartyUrls?: ThirdPartyTrackingUrl[];

  @SpeakeasyMetadata({ data: "json, name=timerCustomEvents", elemType: CreativeCustomEvent })
  timerCustomEvents?: CreativeCustomEvent[];

  @SpeakeasyMetadata({ data: "json, name=totalFileSize" })
  totalFileSize?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreativeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=universalAdId" })
  universalAdId?: UniversalAdId;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
