import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LandlordPhotoModelPhotoTypeEnum {
    Photo = "Photo",
    Map = "Map",
    FloorPlan = "FloorPlan",
    SiteMap = "SiteMap",
    AerialPhoto = "AerialPhoto"
}
/**
 * Stores a photo related to a property structure.
**/
export declare class LandlordPhotoModel extends SpeakeasyBase {
    eTag?: string;
    fileName?: string;
    oid?: string;
    photoType?: LandlordPhotoModelPhotoTypeEnum;
}
