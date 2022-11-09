import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Size } from "./size";
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";
import { TargetWindow } from "./targetwindow";
import { ClickTag } from "./clicktag";
import { CreativeCustomEvent } from "./creativecustomevent";
import { CreativeAssetSelection } from "./creativeassetselection";
import { CreativeAsset } from "./creativeasset";
import { CreativeFieldAssignment } from "./creativefieldassignment";
import { CreativeCustomEvent } from "./creativecustomevent";
import { FsCommand } from "./fscommand";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { ObaIcon } from "./obaicon";
import { VideoOffset } from "./videooffset";
import { DimensionValue } from "./dimensionvalue";
import { Size } from "./size";
import { VideoOffset } from "./videooffset";
import { ThirdPartyTrackingUrl } from "./thirdpartytrackingurl";
import { CreativeCustomEvent } from "./creativecustomevent";
import { UniversalAdId } from "./universaladid";

export enum CreativeArtworkTypeEnum {
    ArtworkTypeFlash = "ARTWORK_TYPE_FLASH"
,    ArtworkTypeHtml5 = "ARTWORK_TYPE_HTML5"
,    ArtworkTypeMixed = "ARTWORK_TYPE_MIXED"
,    ArtworkTypeImage = "ARTWORK_TYPE_IMAGE"
}

export enum CreativeAuthoringSourceEnum {
    CreativeAuthoringSourceDcm = "CREATIVE_AUTHORING_SOURCE_DCM"
,    CreativeAuthoringSourceDbm = "CREATIVE_AUTHORING_SOURCE_DBM"
,    CreativeAuthoringSourceStudio = "CREATIVE_AUTHORING_SOURCE_STUDIO"
,    CreativeAuthoringSourceGwd = "CREATIVE_AUTHORING_SOURCE_GWD"
}

export enum CreativeAuthoringToolEnum {
    Ninja = "NINJA"
,    Swiffy = "SWIFFY"
}

export enum CreativeBackupImageFeaturesEnum {
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

export enum CreativeCompatibilityEnum {
    Display = "DISPLAY"
,    DisplayInterstitial = "DISPLAY_INTERSTITIAL"
,    App = "APP"
,    AppInterstitial = "APP_INTERSTITIAL"
,    InStreamVideo = "IN_STREAM_VIDEO"
,    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum CreativeTypeEnum {
    Image = "IMAGE"
,    DisplayRedirect = "DISPLAY_REDIRECT"
,    CustomDisplay = "CUSTOM_DISPLAY"
,    InternalRedirect = "INTERNAL_REDIRECT"
,    CustomDisplayInterstitial = "CUSTOM_DISPLAY_INTERSTITIAL"
,    InterstitialInternalRedirect = "INTERSTITIAL_INTERNAL_REDIRECT"
,    TrackingText = "TRACKING_TEXT"
,    RichMediaDisplayBanner = "RICH_MEDIA_DISPLAY_BANNER"
,    RichMediaInpageFloating = "RICH_MEDIA_INPAGE_FLOATING"
,    RichMediaImExpand = "RICH_MEDIA_IM_EXPAND"
,    RichMediaDisplayExpanding = "RICH_MEDIA_DISPLAY_EXPANDING"
,    RichMediaDisplayInterstitial = "RICH_MEDIA_DISPLAY_INTERSTITIAL"
,    RichMediaDisplayMultiFloatingInterstitial = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL"
,    RichMediaMobileInApp = "RICH_MEDIA_MOBILE_IN_APP"
,    FlashInpage = "FLASH_INPAGE"
,    InstreamVideo = "INSTREAM_VIDEO"
,    VpaidLinearVideo = "VPAID_LINEAR_VIDEO"
,    VpaidNonLinearVideo = "VPAID_NON_LINEAR_VIDEO"
,    InstreamVideoRedirect = "INSTREAM_VIDEO_REDIRECT"
,    RichMediaPeelDown = "RICH_MEDIA_PEEL_DOWN"
,    Html5Banner = "HTML5_BANNER"
,    Display = "DISPLAY"
,    DisplayImageGallery = "DISPLAY_IMAGE_GALLERY"
,    BrandSafeDefaultInstreamVideo = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO"
,    InstreamAudio = "INSTREAM_AUDIO"
}


// Creative
/** 
 * Contains properties of a Creative.
**/
export class Creative extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=adParameters" })
  adParameters?: string;

  @Metadata({ data: "json, name=adTagKeys" })
  adTagKeys?: string[];

  @Metadata({ data: "json, name=additionalSizes", elemType: shared.Size })
  additionalSizes?: Size[];

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=allowScriptAccess" })
  allowScriptAccess?: boolean;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=artworkType" })
  artworkType?: CreativeArtworkTypeEnum;

  @Metadata({ data: "json, name=authoringSource" })
  authoringSource?: CreativeAuthoringSourceEnum;

  @Metadata({ data: "json, name=authoringTool" })
  authoringTool?: CreativeAuthoringToolEnum;

  @Metadata({ data: "json, name=autoAdvanceImages" })
  autoAdvanceImages?: boolean;

  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=backupImageClickThroughUrl" })
  backupImageClickThroughUrl?: CreativeClickThroughUrl;

  @Metadata({ data: "json, name=backupImageFeatures" })
  backupImageFeatures?: CreativeBackupImageFeaturesEnum[];

  @Metadata({ data: "json, name=backupImageReportingLabel" })
  backupImageReportingLabel?: string;

  @Metadata({ data: "json, name=backupImageTargetWindow" })
  backupImageTargetWindow?: TargetWindow;

  @Metadata({ data: "json, name=clickTags", elemType: shared.ClickTag })
  clickTags?: ClickTag[];

  @Metadata({ data: "json, name=commercialId" })
  commercialId?: string;

  @Metadata({ data: "json, name=companionCreatives" })
  companionCreatives?: string[];

  @Metadata({ data: "json, name=compatibility" })
  compatibility?: CreativeCompatibilityEnum[];

  @Metadata({ data: "json, name=convertFlashToHtml5" })
  convertFlashToHtml5?: boolean;

  @Metadata({ data: "json, name=counterCustomEvents", elemType: shared.CreativeCustomEvent })
  counterCustomEvents?: CreativeCustomEvent[];

  @Metadata({ data: "json, name=creativeAssetSelection" })
  creativeAssetSelection?: CreativeAssetSelection;

  @Metadata({ data: "json, name=creativeAssets", elemType: shared.CreativeAsset })
  creativeAssets?: CreativeAsset[];

  @Metadata({ data: "json, name=creativeFieldAssignments", elemType: shared.CreativeFieldAssignment })
  creativeFieldAssignments?: CreativeFieldAssignment[];

  @Metadata({ data: "json, name=customKeyValues" })
  customKeyValues?: string[];

  @Metadata({ data: "json, name=dynamicAssetSelection" })
  dynamicAssetSelection?: boolean;

  @Metadata({ data: "json, name=exitCustomEvents", elemType: shared.CreativeCustomEvent })
  exitCustomEvents?: CreativeCustomEvent[];

  @Metadata({ data: "json, name=fsCommand" })
  fsCommand?: FsCommand;

  @Metadata({ data: "json, name=htmlCode" })
  htmlCode?: string;

  @Metadata({ data: "json, name=htmlCodeLocked" })
  htmlCodeLocked?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=latestTraffickedCreativeId" })
  latestTraffickedCreativeId?: string;

  @Metadata({ data: "json, name=mediaDescription" })
  mediaDescription?: string;

  @Metadata({ data: "json, name=mediaDuration" })
  mediaDuration?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=obaIcon" })
  obaIcon?: ObaIcon;

  @Metadata({ data: "json, name=overrideCss" })
  overrideCss?: string;

  @Metadata({ data: "json, name=progressOffset" })
  progressOffset?: VideoOffset;

  @Metadata({ data: "json, name=redirectUrl" })
  redirectUrl?: string;

  @Metadata({ data: "json, name=renderingId" })
  renderingId?: string;

  @Metadata({ data: "json, name=renderingIdDimensionValue" })
  renderingIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=requiredFlashPluginVersion" })
  requiredFlashPluginVersion?: string;

  @Metadata({ data: "json, name=requiredFlashVersion" })
  requiredFlashVersion?: number;

  @Metadata({ data: "json, name=size" })
  size?: Size;

  @Metadata({ data: "json, name=skipOffset" })
  skipOffset?: VideoOffset;

  @Metadata({ data: "json, name=skippable" })
  skippable?: boolean;

  @Metadata({ data: "json, name=sslCompliant" })
  sslCompliant?: boolean;

  @Metadata({ data: "json, name=sslOverride" })
  sslOverride?: boolean;

  @Metadata({ data: "json, name=studioAdvertiserId" })
  studioAdvertiserId?: string;

  @Metadata({ data: "json, name=studioCreativeId" })
  studioCreativeId?: string;

  @Metadata({ data: "json, name=studioTraffickedCreativeId" })
  studioTraffickedCreativeId?: string;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=thirdPartyBackupImageImpressionsUrl" })
  thirdPartyBackupImageImpressionsUrl?: string;

  @Metadata({ data: "json, name=thirdPartyRichMediaImpressionsUrl" })
  thirdPartyRichMediaImpressionsUrl?: string;

  @Metadata({ data: "json, name=thirdPartyUrls", elemType: shared.ThirdPartyTrackingUrl })
  thirdPartyUrls?: ThirdPartyTrackingUrl[];

  @Metadata({ data: "json, name=timerCustomEvents", elemType: shared.CreativeCustomEvent })
  timerCustomEvents?: CreativeCustomEvent[];

  @Metadata({ data: "json, name=totalFileSize" })
  totalFileSize?: string;

  @Metadata({ data: "json, name=type" })
  type?: CreativeTypeEnum;

  @Metadata({ data: "json, name=universalAdId" })
  universalAdId?: UniversalAdId;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
