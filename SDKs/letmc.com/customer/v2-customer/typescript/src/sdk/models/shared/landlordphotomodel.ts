import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LandlordPhotoModelPhotoTypeEnum {
    Photo = "Photo",
    Map = "Map",
    FloorPlan = "FloorPlan",
    SiteMap = "SiteMap",
    AerialPhoto = "AerialPhoto"
}


// LandlordPhotoModel
/** 
 * Stores a photo related to a property structure.
**/
export class LandlordPhotoModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ETag" })
  eTag?: string;

  @SpeakeasyMetadata({ data: "json, name=FileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=OID" })
  oid?: string;

  @SpeakeasyMetadata({ data: "json, name=PhotoType" })
  photoType?: LandlordPhotoModelPhotoTypeEnum;
}
