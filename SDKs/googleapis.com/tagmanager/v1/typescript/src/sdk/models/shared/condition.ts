import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";


export enum ConditionTypeEnum {
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


// Condition
/** 
 * Represents a predicate.
**/
export class Condition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter", elemType: Parameter })
  parameter?: Parameter[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ConditionTypeEnum;
}
