import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FreeInstanceMetadataExpireBehaviorEnum {
    ExpireBehaviorUnspecified = "EXPIRE_BEHAVIOR_UNSPECIFIED",
    FreeToProvisioned = "FREE_TO_PROVISIONED",
    RemoveAfterGracePeriod = "REMOVE_AFTER_GRACE_PERIOD"
}


// FreeInstanceMetadata
/** 
 * Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
**/
export class FreeInstanceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireBehavior" })
  expireBehavior?: FreeInstanceMetadataExpireBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upgradeTime" })
  upgradeTime?: string;
}


// FreeInstanceMetadataInput
/** 
 * Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
**/
export class FreeInstanceMetadataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireBehavior" })
  expireBehavior?: FreeInstanceMetadataExpireBehaviorEnum;
}
