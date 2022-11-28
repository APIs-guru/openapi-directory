import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { LogConfig } from "./logconfig";
export declare enum RuleActionEnum {
    NoAction = "NO_ACTION",
    Allow = "ALLOW",
    AllowWithLog = "ALLOW_WITH_LOG",
    Deny = "DENY",
    DenyWithLog = "DENY_WITH_LOG",
    Log = "LOG"
}
/**
 * A rule to be applied in a Policy.
**/
export declare class Rule extends SpeakeasyBase {
    action?: RuleActionEnum;
    conditions?: Condition[];
    description?: string;
    in?: string[];
    logConfig?: LogConfig[];
    notIn?: string[];
    permissions?: string[];
}
