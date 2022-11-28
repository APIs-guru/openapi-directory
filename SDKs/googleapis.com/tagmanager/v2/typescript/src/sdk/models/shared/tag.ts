import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagConsentSetting } from "./tagconsentsetting";
import { Parameter } from "./parameter";
import { SetupTag } from "./setuptag";
import { TeardownTag } from "./teardowntag";


export enum TagTagFiringOptionEnum {
    TagFiringOptionUnspecified = "tagFiringOptionUnspecified",
    Unlimited = "unlimited",
    OncePerEvent = "oncePerEvent",
    OncePerLoad = "oncePerLoad"
}


// Tag
/** 
 * Represents a Google Tag Manager Tag.
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=blockingRuleId" })
  blockingRuleId?: string[];

  @SpeakeasyMetadata({ data: "json, name=blockingTriggerId" })
  blockingTriggerId?: string[];

  @SpeakeasyMetadata({ data: "json, name=consentSettings" })
  consentSettings?: TagConsentSetting;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=firingRuleId" })
  firingRuleId?: string[];

  @SpeakeasyMetadata({ data: "json, name=firingTriggerId" })
  firingTriggerId?: string[];

  @SpeakeasyMetadata({ data: "json, name=liveOnly" })
  liveOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monitoringMetadata" })
  monitoringMetadata?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=monitoringMetadataTagNameKey" })
  monitoringMetadataTagNameKey?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter", elemType: Parameter })
  parameter?: Parameter[];

  @SpeakeasyMetadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=paused" })
  paused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=scheduleEndMs" })
  scheduleEndMs?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleStartMs" })
  scheduleStartMs?: string;

  @SpeakeasyMetadata({ data: "json, name=setupTag", elemType: SetupTag })
  setupTag?: SetupTag[];

  @SpeakeasyMetadata({ data: "json, name=tagFiringOption" })
  tagFiringOption?: TagTagFiringOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=teardownTag", elemType: TeardownTag })
  teardownTag?: TeardownTag[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId?: string;
}
