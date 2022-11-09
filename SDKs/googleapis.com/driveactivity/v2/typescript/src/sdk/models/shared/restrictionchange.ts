import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RestrictionChangeFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED"
,    SharingOutsideDomain = "SHARING_OUTSIDE_DOMAIN"
,    DirectSharing = "DIRECT_SHARING"
,    ItemDuplication = "ITEM_DUPLICATION"
,    DriveFileStream = "DRIVE_FILE_STREAM"
}

export enum RestrictionChangeNewRestrictionEnum {
    RestrictionUnspecified = "RESTRICTION_UNSPECIFIED"
,    Unrestricted = "UNRESTRICTED"
,    FullyRestricted = "FULLY_RESTRICTED"
}


// RestrictionChange
/** 
 * Information about restriction policy changes to a feature.
**/
export class RestrictionChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=feature" })
  feature?: RestrictionChangeFeatureEnum;

  @Metadata({ data: "json, name=newRestriction" })
  newRestriction?: RestrictionChangeNewRestrictionEnum;
}
