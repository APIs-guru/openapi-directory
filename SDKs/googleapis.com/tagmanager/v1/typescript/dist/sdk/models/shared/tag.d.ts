import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
import { SetupTag } from "./setuptag";
import { TeardownTag } from "./teardowntag";
export declare enum TagTagFiringOptionEnum {
    Unlimited = "unlimited",
    OncePerEvent = "oncePerEvent",
    OncePerLoad = "oncePerLoad"
}
/**
 * Represents a Google Tag Manager Tag.
**/
export declare class Tag extends SpeakeasyBase {
    accountId?: string;
    blockingRuleId?: string[];
    blockingTriggerId?: string[];
    containerId?: string;
    fingerprint?: string;
    firingRuleId?: string[];
    firingTriggerId?: string[];
    liveOnly?: boolean;
    name?: string;
    notes?: string;
    parameter?: Parameter[];
    parentFolderId?: string;
    paused?: boolean;
    priority?: Parameter;
    scheduleEndMs?: string;
    scheduleStartMs?: string;
    setupTag?: SetupTag[];
    tagFiringOption?: TagTagFiringOptionEnum;
    tagId?: string;
    teardownTag?: TeardownTag[];
    type?: string;
}
