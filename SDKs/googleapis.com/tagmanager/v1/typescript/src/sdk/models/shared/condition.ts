import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Parameter } from "./parameter";

export enum ConditionTypeEnum {
    Equals = "equals"
,    Contains = "contains"
,    StartsWith = "startsWith"
,    EndsWith = "endsWith"
,    MatchRegex = "matchRegex"
,    Greater = "greater"
,    GreaterOrEquals = "greaterOrEquals"
,    Less = "less"
,    LessOrEquals = "lessOrEquals"
,    CssSelector = "cssSelector"
,    UrlMatches = "urlMatches"
}


// Condition
/** 
 * Represents a predicate.
**/
export class Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameter", elemType: shared.Parameter })
  parameter?: Parameter[];

  @Metadata({ data: "json, name=type" })
  type?: ConditionTypeEnum;
}
