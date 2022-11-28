import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum {
    PointTypeUnspecified = "POINT_TYPE_UNSPECIFIED",
    CenterPoint = "CENTER_POINT",
    SnappedPoint = "SNAPPED_POINT"
}
/**
 * A set of options that specifies the separation between playable locations.
**/
export declare class GoogleMapsPlayablelocationsV3SampleSpacingOptions extends SpeakeasyBase {
    minSpacingMeters?: number;
    pointType?: GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum;
}
