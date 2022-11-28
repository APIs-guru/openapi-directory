import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DynamicTargetingKeyObjectTypeEnum {
    ObjectAdvertiser = "OBJECT_ADVERTISER",
    ObjectAd = "OBJECT_AD",
    ObjectCreative = "OBJECT_CREATIVE",
    ObjectPlacement = "OBJECT_PLACEMENT"
}
/**
 * Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.
**/
export declare class DynamicTargetingKey extends SpeakeasyBase {
    kind?: string;
    name?: string;
    objectId?: string;
    objectType?: DynamicTargetingKeyObjectTypeEnum;
}
