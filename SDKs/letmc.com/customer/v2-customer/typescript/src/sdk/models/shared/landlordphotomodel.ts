import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LandlordPhotoModelPhotoTypeEnum {
    Photo = "Photo"
,    Map = "Map"
,    FloorPlan = "FloorPlan"
,    SiteMap = "SiteMap"
,    AerialPhoto = "AerialPhoto"
}


// LandlordPhotoModel
/** 
 * Stores a photo related to a property structure.
**/
export class LandlordPhotoModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=ETag" })
  eTag?: string;

  @Metadata({ data: "json, name=FileName" })
  fileName?: string;

  @Metadata({ data: "json, name=OID" })
  oid?: string;

  @Metadata({ data: "json, name=PhotoType" })
  photoType?: LandlordPhotoModelPhotoTypeEnum;
}
