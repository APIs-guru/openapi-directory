import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RestrictionChangeFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    SharingOutsideDomain = "SHARING_OUTSIDE_DOMAIN",
    DirectSharing = "DIRECT_SHARING",
    ItemDuplication = "ITEM_DUPLICATION",
    DriveFileStream = "DRIVE_FILE_STREAM"
}
export declare enum RestrictionChangeNewRestrictionEnum {
    RestrictionUnspecified = "RESTRICTION_UNSPECIFIED",
    Unrestricted = "UNRESTRICTED",
    FullyRestricted = "FULLY_RESTRICTED"
}
/**
 * Information about restriction policy changes to a feature.
**/
export declare class RestrictionChange extends SpeakeasyBase {
    feature?: RestrictionChangeFeatureEnum;
    newRestriction?: RestrictionChangeNewRestrictionEnum;
}
