import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FreeInstanceMetadataExpireBehaviorEnum {
    ExpireBehaviorUnspecified = "EXPIRE_BEHAVIOR_UNSPECIFIED",
    FreeToProvisioned = "FREE_TO_PROVISIONED",
    RemoveAfterGracePeriod = "REMOVE_AFTER_GRACE_PERIOD"
}
/**
 * Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
**/
export declare class FreeInstanceMetadata extends SpeakeasyBase {
    expireBehavior?: FreeInstanceMetadataExpireBehaviorEnum;
    expireTime?: string;
    upgradeTime?: string;
}
/**
 * Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
**/
export declare class FreeInstanceMetadataInput extends SpeakeasyBase {
    expireBehavior?: FreeInstanceMetadataExpireBehaviorEnum;
}
