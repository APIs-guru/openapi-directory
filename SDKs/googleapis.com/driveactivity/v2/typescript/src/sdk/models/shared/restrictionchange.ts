import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RestrictionChangeFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    SharingOutsideDomain = "SHARING_OUTSIDE_DOMAIN",
    DirectSharing = "DIRECT_SHARING",
    ItemDuplication = "ITEM_DUPLICATION",
    DriveFileStream = "DRIVE_FILE_STREAM"
}

export enum RestrictionChangeNewRestrictionEnum {
    RestrictionUnspecified = "RESTRICTION_UNSPECIFIED",
    Unrestricted = "UNRESTRICTED",
    FullyRestricted = "FULLY_RESTRICTED"
}


// RestrictionChange
/** 
 * Information about restriction policy changes to a feature.
**/
export class RestrictionChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feature" })
  feature?: RestrictionChangeFeatureEnum;

  @SpeakeasyMetadata({ data: "json, name=newRestriction" })
  newRestriction?: RestrictionChangeNewRestrictionEnum;
}
