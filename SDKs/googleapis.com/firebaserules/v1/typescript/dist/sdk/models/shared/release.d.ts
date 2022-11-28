import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
**/
export declare class Release extends SpeakeasyBase {
    createTime?: string;
    name?: string;
    rulesetName?: string;
    updateTime?: string;
}
/**
 * `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
**/
export declare class ReleaseInput extends SpeakeasyBase {
    name?: string;
    rulesetName?: string;
}
