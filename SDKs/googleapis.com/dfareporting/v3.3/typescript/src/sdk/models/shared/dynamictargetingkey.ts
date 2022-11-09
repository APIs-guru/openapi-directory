import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DynamicTargetingKeyObjectTypeEnum {
    ObjectAdvertiser = "OBJECT_ADVERTISER"
,    ObjectAd = "OBJECT_AD"
,    ObjectCreative = "OBJECT_CREATIVE"
,    ObjectPlacement = "OBJECT_PLACEMENT"
}


// DynamicTargetingKey
/** 
 * Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.
**/
export class DynamicTargetingKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: DynamicTargetingKeyObjectTypeEnum;
}
