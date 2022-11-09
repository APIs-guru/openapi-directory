import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum {
    ContentOutstreamPositionUnspecified = "CONTENT_OUTSTREAM_POSITION_UNSPECIFIED"
,    ContentOutstreamPositionUnknown = "CONTENT_OUTSTREAM_POSITION_UNKNOWN"
,    ContentOutstreamPositionInArticle = "CONTENT_OUTSTREAM_POSITION_IN_ARTICLE"
,    ContentOutstreamPositionInBanner = "CONTENT_OUTSTREAM_POSITION_IN_BANNER"
,    ContentOutstreamPositionInFeed = "CONTENT_OUTSTREAM_POSITION_IN_FEED"
,    ContentOutstreamPositionInterstitial = "CONTENT_OUTSTREAM_POSITION_INTERSTITIAL"
}


// ContentOutstreamPositionTargetingOptionDetails
/** 
 * Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
export class ContentOutstreamPositionTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentOutstreamPosition" })
  contentOutstreamPosition?: ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum;
}
