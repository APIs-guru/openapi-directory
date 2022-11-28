import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum {
    ContentStreamTypeUnspecified = "CONTENT_STREAM_TYPE_UNSPECIFIED",
    ContentLiveStream = "CONTENT_LIVE_STREAM",
    ContentOnDemand = "CONTENT_ON_DEMAND"
}
/**
 * Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.
**/
export declare class ContentStreamTypeTargetingOptionDetails extends SpeakeasyBase {
    contentStreamType?: ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum;
}
