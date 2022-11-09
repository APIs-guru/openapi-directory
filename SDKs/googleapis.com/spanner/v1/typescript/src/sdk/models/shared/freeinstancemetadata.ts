import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FreeInstanceMetadataExpireBehaviorEnum {
    ExpireBehaviorUnspecified = "EXPIRE_BEHAVIOR_UNSPECIFIED"
,    FreeToProvisioned = "FREE_TO_PROVISIONED"
,    RemoveAfterGracePeriod = "REMOVE_AFTER_GRACE_PERIOD"
}


// FreeInstanceMetadata
/** 
 * Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
**/
export class FreeInstanceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=expireBehavior" })
  expireBehavior?: FreeInstanceMetadataExpireBehaviorEnum;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=upgradeTime" })
  upgradeTime?: string;
}
