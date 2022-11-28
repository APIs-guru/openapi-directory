import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Represents a Google Tag Manager Variable.
**/
export declare class Variable extends SpeakeasyBase {
    accountId?: string;
    containerId?: string;
    disablingTriggerId?: string[];
    enablingTriggerId?: string[];
    fingerprint?: string;
    name?: string;
    notes?: string;
    parameter?: Parameter[];
    parentFolderId?: string;
    scheduleEndMs?: string;
    scheduleStartMs?: string;
    type?: string;
    variableId?: string;
}
