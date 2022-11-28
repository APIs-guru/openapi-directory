import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
export declare enum ConditionTypeEnum {
    ConditionTypeUnspecified = "conditionTypeUnspecified",
    Equals = "equals",
    Contains = "contains",
    StartsWith = "startsWith",
    EndsWith = "endsWith",
    MatchRegex = "matchRegex",
    Greater = "greater",
    GreaterOrEquals = "greaterOrEquals",
    Less = "less",
    LessOrEquals = "lessOrEquals",
    CssSelector = "cssSelector",
    UrlMatches = "urlMatches"
}
/**
 * Represents a predicate.
**/
export declare class Condition extends SpeakeasyBase {
    parameter?: Parameter[];
    type?: ConditionTypeEnum;
}
