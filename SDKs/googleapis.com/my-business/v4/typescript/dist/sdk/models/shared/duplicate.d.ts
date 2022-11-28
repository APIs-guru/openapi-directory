import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DuplicateAccessEnum {
    AccessUnspecified = "ACCESS_UNSPECIFIED",
    AccessUnknown = "ACCESS_UNKNOWN",
    Allowed = "ALLOWED",
    Insufficient = "INSUFFICIENT"
}
/**
 * Information about the location that this location duplicates.
**/
export declare class Duplicate extends SpeakeasyBase {
    access?: DuplicateAccessEnum;
    locationName?: string;
    placeId?: string;
}
