import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Represents a Google tag configuration.
**/
export declare class GtagConfig extends SpeakeasyBase {
    accountId?: string;
    containerId?: string;
    fingerprint?: string;
    gtagConfigId?: string;
    parameter?: Parameter[];
    path?: string;
    tagManagerUrl?: string;
    type?: string;
    workspaceId?: string;
}
