import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DfareportingPlacementsGeneratetagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingPlacementsGeneratetagsTagFormatsEnum {
    PlacementTagStandard = "PLACEMENT_TAG_STANDARD",
    PlacementTagIframeJavascript = "PLACEMENT_TAG_IFRAME_JAVASCRIPT",
    PlacementTagIframeIlayer = "PLACEMENT_TAG_IFRAME_ILAYER",
    PlacementTagInternalRedirect = "PLACEMENT_TAG_INTERNAL_REDIRECT",
    PlacementTagJavascript = "PLACEMENT_TAG_JAVASCRIPT",
    PlacementTagInterstitialIframeJavascript = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT",
    PlacementTagInterstitialInternalRedirect = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT",
    PlacementTagInterstitialJavascript = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT",
    PlacementTagClickCommands = "PLACEMENT_TAG_CLICK_COMMANDS",
    PlacementTagInstreamVideoPrefetch = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH",
    PlacementTagTracking = "PLACEMENT_TAG_TRACKING",
    PlacementTagTrackingIframe = "PLACEMENT_TAG_TRACKING_IFRAME",
    PlacementTagTrackingJavascript = "PLACEMENT_TAG_TRACKING_JAVASCRIPT",
    PlacementTagInstreamVideoPrefetchVast3 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3",
    PlacementTagIframeJavascriptLegacy = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY",
    PlacementTagJavascriptLegacy = "PLACEMENT_TAG_JAVASCRIPT_LEGACY",
    PlacementTagInterstitialIframeJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY",
    PlacementTagInterstitialJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY",
    PlacementTagInstreamVideoPrefetchVast4 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4",
    PlacementTagTrackingThirdPartyMeasurement = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
}


export class DfareportingPlacementsGeneratetagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placementIds" })
  placementIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagFormats" })
  tagFormats?: DfareportingPlacementsGeneratetagsTagFormatsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingPlacementsGeneratetagsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingPlacementsGeneratetagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfareportingPlacementsGeneratetagsPathParams;

  @SpeakeasyMetadata()
  queryParams: DfareportingPlacementsGeneratetagsQueryParams;

  @SpeakeasyMetadata()
  security: DfareportingPlacementsGeneratetagsSecurity;
}


export class DfareportingPlacementsGeneratetagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  placementsGenerateTagsResponse?: shared.PlacementsGenerateTagsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
