import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Represents a Google Tag Manager Macro.
**/
export declare class Macro extends SpeakeasyBase {
    accountId?: string;
    containerId?: string;
    disablingRuleId?: string[];
    enablingRuleId?: string[];
    fingerprint?: string;
    macroId?: string;
    name?: string;
    notes?: string;
    parameter?: Parameter[];
    parentFolderId?: string;
    scheduleEndMs?: string;
    scheduleStartMs?: string;
    type?: string;
}
