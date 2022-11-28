import { SpeakeasyBase } from "../../../internal/utils";
import { TagConsentSetting } from "./tagconsentsetting";
import { Parameter } from "./parameter";
import { SetupTag } from "./setuptag";
import { TeardownTag } from "./teardowntag";
export declare enum TagTagFiringOptionEnum {
    TagFiringOptionUnspecified = "tagFiringOptionUnspecified",
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
    consentSettings?: TagConsentSetting;
    containerId?: string;
    fingerprint?: string;
    firingRuleId?: string[];
    firingTriggerId?: string[];
    liveOnly?: boolean;
    monitoringMetadata?: Parameter;
    monitoringMetadataTagNameKey?: string;
    name?: string;
    notes?: string;
    parameter?: Parameter[];
    parentFolderId?: string;
    path?: string;
    paused?: boolean;
    priority?: Parameter;
    scheduleEndMs?: string;
    scheduleStartMs?: string;
    setupTag?: SetupTag[];
    tagFiringOption?: TagTagFiringOptionEnum;
    tagId?: string;
    tagManagerUrl?: string;
    teardownTag?: TeardownTag[];
    type?: string;
    workspaceId?: string;
}
