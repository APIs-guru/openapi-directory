import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { SetupTag } from "./setuptag";
import { TeardownTag } from "./teardowntag";

export enum TagTagFiringOptionEnum {
    Unlimited = "unlimited"
,    OncePerEvent = "oncePerEvent"
,    OncePerLoad = "oncePerLoad"
}


// Tag
/** 
 * Represents a Google Tag Manager Tag.
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=blockingRuleId" })
  blockingRuleId?: string[];

  @Metadata({ data: "json, name=blockingTriggerId" })
  blockingTriggerId?: string[];

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=firingRuleId" })
  firingRuleId?: string[];

  @Metadata({ data: "json, name=firingTriggerId" })
  firingTriggerId?: string[];

  @Metadata({ data: "json, name=liveOnly" })
  liveOnly?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=parameter", elemType: shared.Parameter })
  parameter?: Parameter[];

  @Metadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=paused" })
  paused?: boolean;

  @Metadata({ data: "json, name=priority" })
  priority?: Parameter;

  @Metadata({ data: "json, name=scheduleEndMs" })
  scheduleEndMs?: string;

  @Metadata({ data: "json, name=scheduleStartMs" })
  scheduleStartMs?: string;

  @Metadata({ data: "json, name=setupTag", elemType: shared.SetupTag })
  setupTag?: SetupTag[];

  @Metadata({ data: "json, name=tagFiringOption" })
  tagFiringOption?: TagTagFiringOptionEnum;

  @Metadata({ data: "json, name=tagId" })
  tagId?: string;

  @Metadata({ data: "json, name=teardownTag", elemType: shared.TeardownTag })
  teardownTag?: TeardownTag[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
