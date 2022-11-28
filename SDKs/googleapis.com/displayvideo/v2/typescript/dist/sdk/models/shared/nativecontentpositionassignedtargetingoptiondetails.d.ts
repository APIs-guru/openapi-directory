import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum {
    NativeContentPositionUnspecified = "NATIVE_CONTENT_POSITION_UNSPECIFIED",
    NativeContentPositionUnknown = "NATIVE_CONTENT_POSITION_UNKNOWN",
    NativeContentPositionInArticle = "NATIVE_CONTENT_POSITION_IN_ARTICLE",
    NativeContentPositionInFeed = "NATIVE_CONTENT_POSITION_IN_FEED",
    NativeContentPositionPeripheral = "NATIVE_CONTENT_POSITION_PERIPHERAL",
    NativeContentPositionRecommendation = "NATIVE_CONTENT_POSITION_RECOMMENDATION"
}
/**
 * Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect.
**/
export declare class NativeContentPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
    contentPosition?: NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
}
