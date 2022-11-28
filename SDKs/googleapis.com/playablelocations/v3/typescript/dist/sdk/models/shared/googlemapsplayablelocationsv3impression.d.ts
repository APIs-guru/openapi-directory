import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum {
    ImpressionTypeUnspecified = "IMPRESSION_TYPE_UNSPECIFIED",
    Presented = "PRESENTED",
    Interacted = "INTERACTED"
}
/**
 * Encapsulates impression event details.
**/
export declare class GoogleMapsPlayablelocationsV3Impression extends SpeakeasyBase {
    gameObjectType?: number;
    impressionType?: GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum;
    locationName?: string;
}
