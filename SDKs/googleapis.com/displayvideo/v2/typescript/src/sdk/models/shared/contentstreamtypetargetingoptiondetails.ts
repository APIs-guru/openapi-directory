import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum {
    ContentStreamTypeUnspecified = "CONTENT_STREAM_TYPE_UNSPECIFIED"
,    ContentLiveStream = "CONTENT_LIVE_STREAM"
,    ContentOnDemand = "CONTENT_ON_DEMAND"
}


// ContentStreamTypeTargetingOptionDetails
/** 
 * Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.
**/
export class ContentStreamTypeTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentStreamType" })
  contentStreamType?: ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum;
}
