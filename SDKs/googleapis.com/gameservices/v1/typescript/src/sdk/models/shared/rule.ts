import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Condition } from "./condition";
import { LogConfig } from "./logconfig";

export enum RuleActionEnum {
    NoAction = "NO_ACTION"
,    Allow = "ALLOW"
,    AllowWithLog = "ALLOW_WITH_LOG"
,    Deny = "DENY"
,    DenyWithLog = "DENY_WITH_LOG"
,    Log = "LOG"
}


// Rule
/** 
 * A rule to be applied in a Policy.
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: RuleActionEnum;

  @Metadata({ data: "json, name=conditions", elemType: shared.Condition })
  conditions?: Condition[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=in" })
  in?: string[];

  @Metadata({ data: "json, name=logConfig", elemType: shared.LogConfig })
  logConfig?: LogConfig[];

  @Metadata({ data: "json, name=notIn" })
  notIn?: string[];

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
