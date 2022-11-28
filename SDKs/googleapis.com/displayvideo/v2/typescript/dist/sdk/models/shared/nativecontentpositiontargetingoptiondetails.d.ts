import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NativeContentPositionTargetingOptionDetailsContentPositionEnum {
    NativeContentPositionUnspecified = "NATIVE_CONTENT_POSITION_UNSPECIFIED",
    NativeContentPositionUnknown = "NATIVE_CONTENT_POSITION_UNKNOWN",
    NativeContentPositionInArticle = "NATIVE_CONTENT_POSITION_IN_ARTICLE",
    NativeContentPositionInFeed = "NATIVE_CONTENT_POSITION_IN_FEED",
    NativeContentPositionPeripheral = "NATIVE_CONTENT_POSITION_PERIPHERAL",
    NativeContentPositionRecommendation = "NATIVE_CONTENT_POSITION_RECOMMENDATION"
}
/**
 * Represents a targetable native content position. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`.
**/
export declare class NativeContentPositionTargetingOptionDetails extends SpeakeasyBase {
    contentPosition?: NativeContentPositionTargetingOptionDetailsContentPositionEnum;
}
