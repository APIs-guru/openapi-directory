import { SpeakeasyBase } from "../../../internal/utils";
import { VariableFormatValue } from "./variableformatvalue";
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
    formatValue?: VariableFormatValue;
    name?: string;
    notes?: string;
    parameter?: Parameter[];
    parentFolderId?: string;
    path?: string;
    scheduleEndMs?: string;
    scheduleStartMs?: string;
    tagManagerUrl?: string;
    type?: string;
    variableId?: string;
    workspaceId?: string;
}
