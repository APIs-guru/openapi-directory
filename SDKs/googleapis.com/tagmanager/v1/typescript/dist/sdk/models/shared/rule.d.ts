import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
/**
 * Represents a Google Tag Manager Rule.
**/
export declare class Rule extends SpeakeasyBase {
    accountId?: string;
    condition?: Condition[];
    containerId?: string;
    fingerprint?: string;
    name?: string;
    notes?: string;
    ruleId?: string;
}
