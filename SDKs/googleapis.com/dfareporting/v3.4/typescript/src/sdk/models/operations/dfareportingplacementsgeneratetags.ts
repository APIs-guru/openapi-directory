import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DfareportingPlacementsGeneratetagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingPlacementsGeneratetagsTagFormatsEnum {
    PlacementTagStandard = "PLACEMENT_TAG_STANDARD"
,    PlacementTagIframeJavascript = "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
,    PlacementTagIframeIlayer = "PLACEMENT_TAG_IFRAME_ILAYER"
,    PlacementTagInternalRedirect = "PLACEMENT_TAG_INTERNAL_REDIRECT"
,    PlacementTagJavascript = "PLACEMENT_TAG_JAVASCRIPT"
,    PlacementTagInterstitialIframeJavascript = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
,    PlacementTagInterstitialInternalRedirect = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
,    PlacementTagInterstitialJavascript = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
,    PlacementTagClickCommands = "PLACEMENT_TAG_CLICK_COMMANDS"
,    PlacementTagInstreamVideoPrefetch = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
,    PlacementTagTracking = "PLACEMENT_TAG_TRACKING"
,    PlacementTagTrackingIframe = "PLACEMENT_TAG_TRACKING_IFRAME"
,    PlacementTagTrackingJavascript = "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
,    PlacementTagInstreamVideoPrefetchVast3 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
,    PlacementTagIframeJavascriptLegacy = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
,    PlacementTagJavascriptLegacy = "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
,    PlacementTagInterstitialIframeJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
,    PlacementTagInterstitialJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
,    PlacementTagInstreamVideoPrefetchVast4 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
,    PlacementTagTrackingThirdPartyMeasurement = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
}


export class DfareportingPlacementsGeneratetagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=placementIds" })
  placementIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagFormats" })
  tagFormats?: DfareportingPlacementsGeneratetagsTagFormatsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingPlacementsGeneratetagsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingPlacementsGeneratetagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfareportingPlacementsGeneratetagsPathParams;

  @Metadata()
  queryParams: DfareportingPlacementsGeneratetagsQueryParams;

  @Metadata()
  security: DfareportingPlacementsGeneratetagsSecurity;
}


export class DfareportingPlacementsGeneratetagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  placementsGenerateTagsResponse?: shared.PlacementsGenerateTagsResponse;

  @Metadata()
  statusCode: number;
}
